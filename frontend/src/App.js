import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/status')
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch(() => setError('Backend non disponible'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
      <h1>Mon Projet CI 🚀</h1>
      <p>Frontend React + Backend Node.js</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Statut du Backend</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {status && (
          <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '8px', display: 'inline-block' }}>
            <p>✅ Status : <strong>{status.status}</strong></p>
            <p>🕐 Timestamp : {status.timestamp}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
