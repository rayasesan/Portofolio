"""Builds src/data/projectData.json from rayasesan's notebook repos.

Usage: python scripts/build_project_data.py <dir with cloned repos>

For each ML repo it trains a small Logistic Regression on a handful of
user-friendly inputs (same dataset, same 80/20 stratified split as the
notebook) and exports its weights so the browser can score new inputs.
The SQL repo's queries are run against its bundled SQLite database.
"""
import json
import re
import sqlite3
import sys
from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, roc_auc_score
from sklearn.model_selection import train_test_split

ROOT = Path(sys.argv[1])
OUT = Path(__file__).resolve().parents[1] / 'src' / 'data' / 'projectData.json'


def export_model(df, target, numeric, categorical):
    """numeric/categorical: {column: label}. Returns weights + test metrics."""
    X = pd.get_dummies(df[list(numeric) + list(categorical)], columns=list(categorical), drop_first=True, dtype=float)
    y = df[target]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)
    mean = X_train[list(numeric)].mean()
    std = X_train[list(numeric)].std()

    def scale(frame):
        frame = frame.copy()
        frame[list(numeric)] = (frame[list(numeric)] - mean) / std
        return frame

    model = LogisticRegression(max_iter=2000).fit(scale(X_train), y_train)
    proba = model.predict_proba(scale(X_test))[:, 1]
    coef = dict(zip(X.columns, model.coef_[0]))

    return {
        'intercept': round(float(model.intercept_[0]), 5),
        'baseRate': round(float(y.mean()), 4),
        'metrics': {
            'accuracy': round(accuracy_score(y_test, proba >= 0.5) * 100, 2),
            'rocAuc': round(roc_auc_score(y_test, proba) * 100, 2),
            'testRows': int(len(y_test)),
        },
        'numeric': [
            {
                'key': col, 'label': label,
                'mean': round(float(mean[col]), 4), 'std': round(float(std[col]), 4),
                'coef': round(float(coef[col]), 5),
                'min': float(df[col].quantile(0.01)), 'max': float(df[col].quantile(0.99)),
                'default': float(df[col].median()),
                'step': 100 if df[col].quantile(0.99) - df[col].quantile(0.01) > 5000
                else 1 if (df[col] % 1 == 0).all() else 0.1,
            }
            for col, label in numeric.items()
        ],
        'categorical': [
            {
                'key': col, 'label': label,
                'options': [
                    {'value': str(v), 'coef': round(float(coef.get(f'{col}_{v}', 0.0)), 5)}
                    for v in sorted(df[col].astype(str).unique())
                ],
                'default': str(df[col].mode()[0]),
            }
            for col, label in categorical.items()
        ],
    }


def rate_by(df, target, col, order=None):
    g = df.groupby(col, observed=True)[target].agg(['mean', 'size'])
    if order:
        g = g.reindex(order)
    else:
        g = g.sort_values('mean', ascending=False)
    return [{'label': str(k), 'rate': round(float(r['mean']) * 100, 2), 'n': int(r['size'])} for k, r in g.iterrows()]


def churn():
    df = pd.read_csv(ROOT / 'customer-churn-prediction/data/WA_Fn-UseC_-Telco-Customer-Churn.csv')
    df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce')
    df['Churn'] = (df['Churn'] == 'Yes').astype(int)
    df['SeniorCitizen'] = df['SeniorCitizen'].map({0: 'No', 1: 'Yes'})
    df['tenure_group'] = pd.cut(df['tenure'], [-1, 12, 24, 48, 72], labels=['0-12', '13-24', '25-48', '49-72'])
    return {
        'model': export_model(
            df, 'Churn',
            {'tenure': 'Tenure (months)', 'MonthlyCharges': 'Monthly charges ($)'},
            {'Contract': 'Contract', 'InternetService': 'Internet service', 'PaymentMethod': 'Payment method',
             'TechSupport': 'Tech support', 'PaperlessBilling': 'Paperless billing', 'SeniorCitizen': 'Senior citizen'},
        ),
        'charts': [
            {'title': 'Churn rate by contract', 'rows': rate_by(df, 'Churn', 'Contract')},
            {'title': 'Churn rate by tenure (months)', 'rows': rate_by(df, 'Churn', 'tenure_group', ['0-12', '13-24', '25-48', '49-72'])},
            {'title': 'Churn rate by internet service', 'rows': rate_by(df, 'Churn', 'InternetService')},
        ],
    }


def credit():
    df = pd.read_csv(ROOT / 'credit-risk-prediction/data/credit_risk_dataset.csv')
    df = df[(df['person_age'] <= 100) & ((df['person_emp_length'] <= 60) | df['person_emp_length'].isna())].copy()
    for col in ['person_emp_length', 'loan_int_rate']:
        df[col] = df[col].fillna(df[col].median())
    return {
        'model': export_model(
            df, 'loan_status',
            {'person_age': 'Age', 'person_income': 'Annual income ($)', 'loan_amnt': 'Loan amount ($)',
             'loan_int_rate': 'Interest rate (%)', 'person_emp_length': 'Employment length (years)'},
            {'loan_grade': 'Loan grade', 'loan_intent': 'Loan intent', 'person_home_ownership': 'Home ownership',
             'cb_person_default_on_file': 'Previous default on file'},
        ),
        'charts': [
            {'title': 'Default rate by loan grade', 'rows': rate_by(df, 'loan_status', 'loan_grade', list('ABCDEFG'))},
            {'title': 'Default rate by home ownership', 'rows': rate_by(df, 'loan_status', 'person_home_ownership')},
            {'title': 'Default rate by loan intent', 'rows': rate_by(df, 'loan_status', 'loan_intent')},
        ],
    }


def bank():
    df = pd.read_csv(ROOT / 'bank-marketing-prediction/data/bank-full.csv', sep=';')
    df['y'] = (df['y'] == 'yes').astype(int)
    months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    # `duration` is left out on purpose: it is only known after the call ends.
    return {
        'model': export_model(
            df, 'y',
            {'age': 'Age', 'balance': 'Account balance (EUR)', 'campaign': 'Contacts this campaign'},
            {'job': 'Job', 'contact': 'Contact method', 'poutcome': 'Previous campaign outcome',
             'housing': 'Housing loan', 'loan': 'Personal loan', 'month': 'Last contact month'},
        ),
        'charts': [
            {'title': 'Subscription rate by previous outcome', 'rows': rate_by(df, 'y', 'poutcome')},
            {'title': 'Subscription rate by month', 'rows': rate_by(df, 'y', 'month', months)},
            {'title': 'Subscription rate by job', 'rows': rate_by(df, 'y', 'job')},
        ],
    }


def sql():
    repo = ROOT / 'bank-marketing-sql-analysis'
    text = (repo / 'bank_marketing_analysis.sql').read_text(encoding='utf-8')
    con = sqlite3.connect(repo / 'bank_marketing.db')
    queries = []
    for chunk in text.split(';'):
        title = re.findall(r'^--\s*\d+\.\s*(.+)$', chunk, re.M)
        body = '\n'.join(l for l in chunk.splitlines() if not l.strip().startswith('--')).strip()
        if not title or not body:
            continue
        cur = con.execute(body)
        queries.append({
            'title': title[-1].strip(),
            'sql': body,
            'columns': [d[0] for d in cur.description],
            'rows': cur.fetchmany(12),
        })
    return {'queries': queries}


data = {'churn': churn(), 'credit': credit(), 'bank': bank(), 'sql': sql()}
OUT.write_text(json.dumps(data, separators=(',', ':')), encoding='utf-8')
for k in ('churn', 'credit', 'bank'):
    print(k, data[k]['model']['metrics'])
print('sql queries:', len(data['sql']['queries']), '| bytes:', OUT.stat().st_size)
