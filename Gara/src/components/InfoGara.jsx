import './InfoGara.css';

export function InfoGara({ garaInfo }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Iscrizioni Aperte': return '#28a745';
      case 'In Corso': return '#ffc107';
      case 'Completata': return '#6c757d';
      case 'Annullata': return '#dc3545';
      default: return '#007bff';
    }
  };

  return (
    <section className="info-gara">
      <div className="hero-section">
        <h1>{garaInfo.nome}</h1>
        <div className="status-badge" style={{ backgroundColor: getStatusColor(garaInfo.status) }}>
          {garaInfo.status}
        </div>
      </div>
      
      <div className="info-grid">
        <div className="info-card">
          <h3>📅 Data</h3>
          <p>{garaInfo.data}</p>
        </div>
        <div className="info-card">
          <h3>🏁 Luogo</h3>
          <p>{garaInfo.luogo}</p>
        </div>
        <div className="info-card">
          <h3>🏎️ Categoria</h3>
          <p>{garaInfo.categoria}</p>
        </div>
      </div>
      
      <div className="descrizione">
        <p>{garaInfo.descrizione}</p>
      </div>
    </section>
  );
}