// Web versions of the notebook-only repos. Numbers in `data` come from
// src/data/projectData.json (scripts/build_project_data.py); the stats here
// are the notebook results reported in each repo's README.
export const projectPages = [
  {
    slug: 'customer-churn',
    data: 'churn',
    kind: 'Machine Learning',
    year: '2026',
    title: 'Customer Churn Prediction',
    summary: 'Predicts which telecom customers are about to leave, using demographic, service, billing, and contract data from 7,043 customers, so retention teams can act before the contract ends.',
    stats: [
      { value: '7,043', label: 'Customers' },
      { value: '84.26%', label: 'Notebook ROC-AUC' },
      { value: 'Logistic Regression', label: 'Best model' },
    ],
    subject: 'customer',
    outcome: 'churn',
    findings: [
      'Month-to-month customers churn at 42.71%, against 2.83% on two-year contracts.',
      'Almost half of customers in their first year leave (47.44%); after four years it drops below 10%.',
      'Fiber optic users churn more than twice as often as DSL users.',
    ],
    images: [{ src: '/projects/churn-top-features.png', alt: 'Top features driving churn from the notebook', caption: 'Top churn drivers, from the notebook' }],
    links: [
      { label: 'Repository', href: 'https://github.com/rayasesan/customer-churn-prediction' },
      { label: 'Notebook', href: 'https://github.com/rayasesan/customer-churn-prediction/blob/main/customer_churn_prediction.ipynb' },
    ],
  },
  {
    slug: 'credit-risk',
    data: 'credit',
    kind: 'Machine Learning',
    year: '2026',
    title: 'Credit Risk Prediction',
    summary: 'Estimates the chance a borrower defaults from demographic, financial, and loan details, giving lenders a consistent first read on risk.',
    stats: [
      { value: '93.23%', label: 'Notebook accuracy' },
      { value: '93.11%', label: 'Notebook ROC-AUC' },
      { value: 'Random Forest', label: 'Best model' },
    ],
    subject: 'borrower',
    outcome: 'default',
    findings: [
      'Default risk jumps between grade C (20.74%) and grade D (59.03%); grade G loans almost always default.',
      'Renters default at 31.57%, four times the rate of homeowners (7.47%).',
      'Debt consolidation and medical loans carry the highest default rates of all loan intents.',
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/rayasesan/credit-risk-prediction' },
      { label: 'Notebook', href: 'https://github.com/rayasesan/credit-risk-prediction/blob/main/credit_risk_prediction.ipynb' },
    ],
  },
  {
    slug: 'bank-marketing',
    data: 'bank',
    kind: 'Machine Learning',
    year: '2026',
    title: 'Bank Marketing Prediction',
    summary: 'Predicts which customers will subscribe to a term deposit, so a telemarketing team can call high-potential leads first instead of everyone.',
    stats: [
      { value: '45,211', label: 'Customers' },
      { value: '92.72%', label: 'Notebook ROC-AUC' },
      { value: 'Random Forest', label: 'Best model' },
    ],
    subject: 'customer',
    outcome: 'subscription',
    demoNote: 'Call duration is left out of the demo because it is only known after the call ends.',
    findings: [
      'Customers whose previous campaign succeeded subscribe at 64.73%, more than five times the 11.7% average.',
      'March, September, October, and December convert above 43%, while May, the busiest month, converts at 6.72%.',
      'Students (28.68%) and retirees (22.79%) are the most responsive job groups.',
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/rayasesan/bank-marketing-prediction' },
      { label: 'Notebook', href: 'https://github.com/rayasesan/bank-marketing-prediction/blob/main/bank_marketing_prediction.ipynb' },
    ],
  },
  {
    slug: 'retail-forecasting',
    kind: 'Time Series',
    year: '2026',
    title: 'Retail Sales Forecasting',
    summary: 'Forecasts daily store sales from more than three million records across 54 stores and 33 product families (2013 to 2017) with Prophet, and measures how much promotions move demand.',
    stats: [
      { value: '3M+', label: 'Sales records' },
      { value: '134,565', label: 'MAE' },
      { value: '0.428', label: 'Promotion vs. sales correlation' },
    ],
    findings: [
      'Sales grew steadily from 2013 to 2017, with strong and repeatable seasonality.',
      'Promotions have a moderate positive link with sales (correlation 0.428).',
      'The model captures the long-term trend and the weekly and yearly cycles, with an RMSE of 172,421.',
    ],
    images: [
      { src: '/projects/retail/daily_sales_trend.png', alt: 'Daily sales trend 2013 to 2017', caption: 'Daily sales trend' },
      { src: '/projects/retail/forecast_components.png', alt: 'Prophet forecast components', caption: 'Forecast components' },
      { src: '/projects/retail/monthly_sales_trend.png', alt: 'Monthly sales trend', caption: 'Monthly sales' },
      { src: '/projects/retail/moving_average.png', alt: '30-day moving average of sales', caption: '30-day moving average' },
      { src: '/projects/retail/promotion_analysis.png', alt: 'Promotion versus sales analysis', caption: 'Promotion impact' },
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/rayasesan/retail-sales-forecasting' },
      { label: 'Notebook', href: 'https://github.com/rayasesan/retail-sales-forecasting/blob/main/notebook/retail_sales_forecasting.ipynb' },
    ],
  },
  {
    slug: 'bank-sql',
    data: 'sql',
    kind: 'Data Analysis / SQL',
    year: '2026',
    title: 'Bank Marketing SQL Analytics',
    summary: 'Eleven SQL queries over 45,211 campaign records that answer which customer segments and campaign choices actually drive term deposit sign-ups.',
    stats: [
      { value: '45,211', label: 'Records' },
      { value: '11', label: 'Queries' },
      { value: '64.73%', label: 'Previous-success conversion' },
    ],
    findings: [
      'Previous campaign success is the strongest signal: 64.73% of those customers subscribe again.',
      'Cellular contact converts at 14.92%, while customers with an unknown contact method convert at 4.07%.',
      'Customers under 25 convert at 25.59%, the highest of any age group.',
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/rayasesan/bank-marketing-sql-analysis' },
      { label: 'SQL file', href: 'https://github.com/rayasesan/bank-marketing-sql-analysis/blob/main/bank_marketing_analysis.sql' },
    ],
  },
];

export const projectHref = (slug) => `#/projects/${slug}`;
