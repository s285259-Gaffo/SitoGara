import '../styles/Classifica.css';

export function Classifica({ classifica }) {
  const getPodiumClass = (posizione) => {
    if (posizione === 1) return 'primo';
    if (posizione === 2) return 'secondo';
    if (posizione === 3) return 'terzo';
    return '';
  };

  const getMedaglia = (posizione) => {
    if (posizione === 1) return '🥇';
    if (posizione === 2) return '🥈';
    if (posizione === 3) return '🥉';
    return '';
  };

  return (
    <section className="classifica">
      <h2>🏆 Classifica Campionato</h2>
      
      <div className="classifica-tabella">
        <div className="tabella-header">
          <div className="col-pos">Pos</div>
          <div className="col-numero">#</div>
          <div className="col-pilota">Pilota</div>
          <div className="col-team">Team</div>
          <div className="col-punti">Punti</div>
        </div>
        
        {classifica.map((pilota) => (
          <div 
            key={pilota.posizione} 
            className={`pilota-row ${getPodiumClass(pilota.posizione)}`}
          >
            <div className="col-pos">
              <span className="posizione-numero">{pilota.posizione}</span>
              <span className="medaglia">{getMedaglia(pilota.posizione)}</span>
            </div>
            <div className="col-numero">
              <span className="numero-pilota">{pilota.numero}</span>
            </div>
            <div className="col-pilota">
              <span className="nazionalita">{pilota.nazionalita}</span>
              <span className="nome-pilota">{pilota.pilota}</span>
            </div>
            <div className="col-team">{pilota.team}</div>
            <div className="col-punti">
              <span className="punti-numero">{pilota.punti}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}