import { useEffect, useState } from 'react';
import { fetchRecords } from '../api';

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '-';
  if (typeof value === 'object') return value.name || value.email || value._id || JSON.stringify(value);
  return String(value);
}

export default function ResourceTable({ resource, endpoint, title, description, columns }) {
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    fetchRecords(resource, endpoint)
      .then((items) => {
        if (active) {
          setRecords(items);
          setStatus('ready');
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message);
          setStatus('error');
        }
      });
    return () => {
      active = false;
    };
  }, [endpoint, resource]);

  return (
    <section className="resource-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">OctoFit Tracker / {resource}</p>
          <h1>{title}</h1>
          <p className="page-description">{description}</p>
        </div>
        <span className="record-count">{status === 'ready' ? `${records.length} records` : 'Loading'}</span>
      </div>

      {status === 'loading' && <div className="state-panel">Loading {resource}...</div>}
      {status === 'error' && <div className="state-panel state-error">{error}</div>}
      {status === 'ready' && records.length === 0 && <div className="state-panel">No records yet.</div>}
      {status === 'ready' && records.length > 0 && (
        <div className="table-frame">
          <table className="tracker-table">
            <thead>
              <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record._id || record.id}>
                  {columns.map((column) => <td key={column.key}>{displayValue(record[column.key])}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
