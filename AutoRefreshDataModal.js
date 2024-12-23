import React from 'react';
import useAutoFetch from '../hooks/useAutoFetch';

const AutoRefreshDataModal = ({ show, onClose }) => {
  const { data, loading, error } = useAutoFetch('https://jsonplaceholder.typicode.com/posts', show);

  if (!show) return null;

  return (
    <div className="modal" style={{ display: 'block', background: 'rgba(207, 32, 32, 0.5)', padding: '20px' }}>
      <div className="modal-content" style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
        <button className="close" onClick={onClose} style={{ float: 'right', fontSize: '1.5rem' }}>
          &times;
        </button>
        <h2>Fetched Data</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoRefreshDataModal;
