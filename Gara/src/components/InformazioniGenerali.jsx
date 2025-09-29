import './InformazioniGenerali.css';

export function InformazioniGenerali({ eventoInfo, onBack }) {
  return (
    <div className="informazioni-generali">
      <header className="info-header">
        <button className="back-button" onClick={onBack}>
          ← Torna alla Home
        </button>
        <h1>🏛️ Informazioni Generali</h1>
      </header>

      <div className="info-content">
        <div className="event-card main-event">
          <div className="event-hero">
            <h2>{eventoInfo.nome}</h2>
            <div className="event-status">
              <span className="status-badge completed">{eventoInfo.status}</span>
            </div>
          </div>
          
          <div className="event-details-grid">
            <div className="detail-item">
              <div className="detail-icon">📅</div>
              <div className="detail-content">
                <h3>Data dell'Evento</h3>
                <p>{eventoInfo.data}</p>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">🏛️</div>
              <div className="detail-content">
                <h3>Location</h3>
                <p>{eventoInfo.luogo}</p>
                <small>{eventoInfo.indirizzo}</small>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">🏆</div>
              <div className="detail-content">
                <h3>Categoria</h3>
                <p>{eventoInfo.categoria}</p>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">👨‍💼</div>
              <div className="detail-content">
                <h3>Organizzatore</h3>
                <p>{eventoInfo.organizzatore}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="description-card">
          <h3>🎭 Descrizione dell'Evento</h3>
          <p>{eventoInfo.descrizione}</p>
          
          <div className="event-highlights">
            <h4>✨ Highlights</h4>
            <ul>
              <li>🏟️ <strong>Location Unica:</strong> Il suggestivo Teatro Superga offre una cornice storica e teatrale perfetta per la competizione</li>
              <li>🎯 <strong>Categoria Giovanile:</strong> Competizione dedicata ai giovani atleti emergenti del bodybuilding e fitness</li>
              <li>🏆 <strong>Alta Competizione:</strong> Standard professionali con giuria qualificata e regolamento internazionale</li>
              <li>📸 <strong>Documentazione Professionale:</strong> Servizio fotografico e video per immortalare i momenti più belli</li>
              <li>🎊 <strong>Atmosfera Epica:</strong> Un evento che unisce sport, arte e spettacolo in un'esperienza indimenticabile</li>
            </ul>
          </div>
        </div>

        <div className="info-cards-grid">
          <div className="info-card">
            <h3>🕒 Orari</h3>
            <div className="schedule-list">
              <div className="schedule-item">
                <span className="time">14:00</span>
                <span className="activity">Registrazione atleti</span>
              </div>
              <div className="schedule-item">
                <span className="time">15:00</span>
                <span className="activity">Briefing tecnico</span>
              </div>
              <div className="schedule-item">
                <span className="time">16:00</span>
                <span className="activity">Inizio competizioni</span>
              </div>
              <div className="schedule-item">
                <span className="time">19:00</span>
                <span className="activity">Premiazioni</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>🎫 Accesso</h3>
            <div className="access-info">
              <p><strong>Ingresso Libero</strong> per il pubblico</p>
              <p><strong>Parcheggio</strong> disponibile nelle vicinanze</p>
              <p><strong>Accessibilità</strong> per persone con disabilità</p>
              <p><strong>Area Ristoro</strong> all'interno del teatro</p>
            </div>
          </div>

          <div className="info-card">
            <h3>📋 Regolamento</h3>
            <div className="rules-summary">
              <p>• <strong>Categorie:</strong> Suddivise per età e esperienza</p>
              <p>• <strong>Pose Obbligatorie:</strong> Secondo standard IFBB</p>
              <p>• <strong>Abbigliamento:</strong> Costume regolamentare</p>
              <p>• <strong>Giuria:</strong> Composta da giudici certificati</p>
              <p>• <strong>Fair Play:</strong> Rispetto e sportività</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}