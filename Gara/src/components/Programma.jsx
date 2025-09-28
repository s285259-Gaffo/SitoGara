import './Programma.css';

export function Programma({ programma }) {
  const getTipoIcon = (tipo) => {
    switch (tipo) {
      case 'tecnico': return '🔧';
      case 'briefing': return '📋';
      case 'pista': return '🏁';
      case 'qualifica': return '⏱️';
      case 'gara': return '🏆';
      case 'cerimonia': return '🥇';
      default: return '📅';
    }
  };

  const getTipoColor = (tipo) => {
    switch (tipo) {
      case 'tecnico': return '#6c757d';
      case 'briefing': return '#17a2b8';
      case 'pista': return '#ffc107';
      case 'qualifica': return '#fd7e14';
      case 'gara': return '#dc3545';
      case 'cerimonia': return '#28a745';
      default: return '#007bff';
    }
  };

  return (
    <section className="programma">
      <h2>📅 Programma della Gara</h2>
      
      {programma.map((giorno, index) => (
        <div key={index} className="giorno-programma">
          <h3 className="giorno-titolo">{giorno.giorno}</h3>
          
          <div className="eventi-lista">
            {giorno.eventi.map((evento, eventIndex) => (
              <div 
                key={eventIndex} 
                className="evento-card"
                style={{ borderLeftColor: getTipoColor(evento.tipo) }}
              >
                <div className="evento-ora">
                  {evento.ora}
                </div>
                <div className="evento-info">
                  <div className="evento-nome">
                    <span className="evento-icon">{getTipoIcon(evento.tipo)}</span>
                    {evento.evento}
                  </div>
                  {evento.durata && (
                    <div className="evento-durata">
                      Durata: {evento.durata}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}