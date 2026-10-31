import { useMemo, useState } from 'react';
import AnimatedLink from './AnimatedLink';
import './ProjectPage.css';
import projectData from '../data/projectData.json';
import { projectPages, projectHref } from '../data/projectPages';

const optionLabels = {
  DEBTCONSOLIDATION: 'Debt consolidation',
  HOMEIMPROVEMENT: 'Home improvement',
  DSL: 'DSL',
  Y: 'Yes',
  N: 'No',
};

const prettify = (value) => optionLabels[value]
  ?? value.charAt(0).toUpperCase() + (value === value.toUpperCase() ? value.slice(1).toLowerCase() : value.slice(1));

const formatNumber = (value) => value.toLocaleString('en-US', { maximumFractionDigits: 2 });

export default function ProjectPage({ page }) {
  const data = page.data ? projectData[page.data] : null;
  const index = projectPages.indexOf(page);
  const next = projectPages[(index + 1) % projectPages.length];

  return (
    <main className="pp">
      <header className="pp-hero">
        <div className="pp-hero-title reveal">
          <a className="pp-back" href="#projects">← All projects</a>
          <p className="pp-kicker">{page.kind} / {page.year}</p>
          <h1>{page.title}</h1>
        </div>
        <div className="pp-hero-side reveal">
          <p className="pp-summary">{page.summary}</p>
          <dl className="pp-stats">
            {page.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <div className="pp-links">
            {page.links.map((link, i) => (
              <AnimatedLink key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" compact variant={i === 0 ? 'red' : 'light'}>
                {link.label}
              </AnimatedLink>
            ))}
          </div>
        </div>
      </header>

      {data?.model && <Predictor model={data.model} page={page} />}

      <section className="pp-section">
        <h2 className="pp-h2 reveal">What the data says</h2>
        <div className="pp-bento reveal">
          <ol className="pp-findings">
            {page.findings.map((finding) => <li key={finding}>{finding}</li>)}
          </ol>
          {data?.charts?.map((chart, i, charts) => (
            <BarChart key={chart.title} chart={chart} layout={chartLayout(charts, i)} />
          ))}
          {page.images?.map((image) => (
            <figure key={image.src} className="pp-figure">
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {data?.queries && <QueryExplorer queries={data.queries} />}

      <nav className="pp-next" aria-label="Next project">
        <span>Next project</span>
        <a href={projectHref(next.slug)}>{next.title} →</a>
      </nav>
    </main>
  );
}

function Predictor({ model, page }) {
  const [values, setValues] = useState(() => Object.fromEntries(
    [...model.numeric, ...model.categorical].map((field) => [field.key, field.default]),
  ));

  const { probability, drivers } = useMemo(() => {
    const parts = [
      ...model.numeric.map((f) => ({ label: f.label, value: formatNumber(values[f.key]), weight: f.coef * (values[f.key] - f.mean) / f.std })),
      ...model.categorical.map((f) => ({ label: f.label, value: prettify(values[f.key]), weight: f.options.find((o) => o.value === values[f.key]).coef })),
    ];
    const logit = model.intercept + parts.reduce((sum, part) => sum + part.weight, 0);
    return {
      probability: 1 / (1 + Math.exp(-logit)),
      drivers: parts.sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight)).slice(0, 4),
    };
  }, [model, values]);

  const set = (key, value) => setValues((current) => ({ ...current, [key]: value }));
  const percent = (probability * 100).toFixed(1);
  const vsBase = probability / model.baseRate;

  return (
    <section className="pp-section pp-demo" aria-labelledby="pp-demo-title">
      <div className="pp-demo-form reveal">
        <h2 id="pp-demo-title" className="pp-h2">Try the model</h2>
        <p className="pp-muted">
          Change the {page.subject} below and the {page.outcome} probability updates instantly.
          Everything runs in your browser.
        </p>

        <div className="pp-fields">
          {model.numeric.map((field) => (
            <label key={field.key} className="pp-field pp-field--range">
              <span className="pp-field-label">
                {field.label}
                <output>{formatNumber(values[field.key])}</output>
              </span>
              <input
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={values[field.key]}
                onChange={(event) => set(field.key, Number(event.target.value))}
              />
            </label>
          ))}
          {model.categorical.map((field) => (
            <label key={field.key} className="pp-field">
              <span className="pp-field-label">{field.label}</span>
              <select value={values[field.key]} onChange={(event) => set(field.key, event.target.value)}>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>{prettify(option.value)}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>

      <aside className="pp-result reveal" aria-live="polite">
        <p className="pp-kicker">{page.outcome} probability</p>
        <p className="pp-result-value">{percent}<span>%</span></p>
        <div className="pp-meter" aria-hidden="true">
          <span style={{ width: `${percent}%` }}></span>
          <i style={{ left: `${model.baseRate * 100}%` }}></i>
        </div>
        <p className="pp-result-base">
          {vsBase >= 1 ? `${vsBase.toFixed(1)}× the` : `${Math.round((1 - vsBase) * 100)}% below the`} dataset average of {(model.baseRate * 100).toFixed(1)}%
        </p>

        <p className="pp-kicker pp-result-sub">Biggest factors for this {page.subject}</p>
        <ul className="pp-drivers">
          {drivers.map((driver) => (
            <li key={driver.label}>
              <span>{driver.label}: {driver.value}</span>
              <b className={driver.weight > 0 ? 'is-up' : 'is-down'}>{driver.weight > 0 ? 'raises' : 'lowers'}</b>
            </li>
          ))}
        </ul>

        <p className="pp-result-note">
          Demo model: Logistic Regression on {model.numeric.length + model.categorical.length} inputs, trained on the same
          dataset and split as the notebook ({model.metrics.rocAuc}% ROC-AUC on {model.metrics.testRows.toLocaleString('en-US')} test rows).
          The notebook&apos;s full model uses every feature. {page.demoNote}
        </p>
      </aside>
    </section>
  );
}

// Keeps the 2-column bento free of holes: a long first chart spans two rows,
// otherwise an odd last chart spans the full width.
const chartLayout = (charts, i) => {
  const firstIsTall = charts[0].rows.length > 6;
  if (i === 0 && firstIsTall) return 'pp-chart--tall';
  if (!firstIsTall && charts.length % 2 && i === charts.length - 1) return 'pp-chart--wide';
  return '';
};

function BarChart({ chart, layout }) {
  const max = Math.max(...chart.rows.map((row) => row.rate));

  return (
    <figure className={`pp-chart ${layout}`}>
      <figcaption>{chart.title}</figcaption>
      <ul>
        {chart.rows.map((row) => (
          <li key={row.label} className={row.rate === max ? 'is-max' : ''}>
            <span className="pp-chart-label">{prettify(row.label)}</span>
            <span className="pp-chart-bar"><span style={{ width: `${(row.rate / max) * 100}%` }}></span></span>
            <span className="pp-chart-value">{row.rate}%</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function QueryExplorer({ queries }) {
  const [active, setActive] = useState(queries.length - 1);
  const query = queries[active];

  return (
    <section className="pp-section pp-sql" aria-labelledby="pp-sql-title">
      <div className="pp-sql-list reveal">
        <h2 id="pp-sql-title" className="pp-h2">Run the queries</h2>
        <p className="pp-muted">Real results from the repository&apos;s SQLite database.</p>
        <ol>
          {queries.map((item, i) => (
            <li key={item.title}>
              <button type="button" className={i === active ? 'is-active' : ''} aria-pressed={i === active} onClick={() => setActive(i)}>
                <span>{String(i + 1).padStart(2, '0')}</span>{item.title}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="pp-sql-panel reveal">
        <pre><code>{query.sql}</code></pre>
        <div className="pp-table-wrap">
          <table>
            <thead>
              <tr>{query.columns.map((col) => <th key={col} scope="col">{col.replaceAll('_', ' ')}</th>)}</tr>
            </thead>
            <tbody>
              {query.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, i) => <td key={query.columns[i]}>{typeof cell === 'number' ? formatNumber(cell) : cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
