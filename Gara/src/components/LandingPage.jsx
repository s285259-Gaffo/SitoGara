import { useState } from 'react';
import '../styles/LandingPage.css';

export function LandingPage({ onNavigate, eventoInfo }) {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = (section) => {
    setShowAnimation(true);
    setTimeout(() => {
      onNavigate(section);
    }, 500);
  };

  return (
    <div className={`landing-page ${showAnimation ? 'fade-out' : ''}`}>
      {/* Background con overlay */}
      <div className="background-arena">
        <div className="arena-overlay"></div>
      </div>

      {/* Contenuto principale */}
      <div className="landing-content">
        {/* Header con titolo epico */}
        <header className="epic-header">
          <h1 className="main-title">
            <span className="title-competitio">COMPETITION</span>
            <span className="title-iuvenes">IUVENES</span>
            <span className="title-iuvenes">IUVENES</span>
          </h1>
          <div className="event-details">
            <div className="event-date">{eventoInfo.data}</div>
            <div className="event-location">{eventoInfo.luogo}</div>
            <div className="event-address">{eventoInfo.indirizzo}</div>
          </div>
        </header>

        {/* Bottoni principali */}
        <div className="action-buttons">
          <button 
            className="epic-button primary"
            onClick={() => handleButtonClick('info')}
          >
            <span className="button-icon">🏛️</span>
            <span className="button-text">
              <strong>Informazioni Generali</strong>
              <small>Dettagli dell'evento e competizione</small>
            </span>
          </button>

          <button 
            className="epic-button secondary"
            onClick={() => handleButtonClick('social')}
          >
            <span className="button-icon">📱</span>
            <span className="button-text">
              <strong>Contatti & Social</strong>
              <small>Seguici e contattaci</small>
            </span>
          </button>

          <button 
            className="epic-button accent"
            onClick={() => handleButtonClick('galleria')}
          >
            <span className="button-icon">📸</span>
            <span className="button-text">
              <strong>Galleria Foto</strong>
              <small>Rivivi i momenti epici</small>
            </span>
          </button>
        </div>

        {/* Footer con organizzatore */}
        {/* <footer className="landing-footer">
          <div className="organizer-info">
            <p>Organizzato da</p>
            <h3>Andrea Romeo</h3>
            <div className="social-quick">
              <span>📷 @andrea__rm</span>
              <span>💬 @competitio_iuvenes</span>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
}