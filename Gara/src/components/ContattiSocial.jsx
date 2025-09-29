import '../styles/ContattiSocial.css';

export function ContattiSocial({ contatti, onBack }) {
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Ciao! Ho visto il Competitio Iuvenes e vorrei avere più informazioni.");
    window.open(`https://wa.me/${contatti.organizzatore.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Info Competitio Iuvenes");
    const body = encodeURIComponent("Ciao Andrea,\n\nHo visto il Competitio Iuvenes e vorrei avere più informazioni sull'evento.\n\nGrazie!");
    window.open(`mailto:${contatti.organizzatore.email}?subject=${subject}&body=${body}`);
  };

  return (
    <div className="contatti-social">
      <header className="contatti-header">
        <button className="back-button" onClick={onBack}>
          ← Torna alla Home
        </button>
        <h1>📱 Contatti & Social</h1>
      </header>

      <div className="contatti-content">
        {/* Card Organizzatore */}
        <div className="organizer-card">
          <div className="organizer-hero">
            <div className="organizer-avatar">👨‍💼</div>
            <h2>{contatti.organizzatore.nome}</h2>
            <p className="organizer-title">Organizzatore & Founder</p>
          </div>
          
          <div className="contact-buttons">
            <button className="contact-btn instagram" onClick={() => handleSocialClick('https://instagram.com/' + contatti.organizzatore.instagram.replace('@', ''))}>
              <span className="btn-icon">📷</span>
              <span className="btn-content">
                <strong>Instagram Personale</strong>
                <small>{contatti.organizzatore.instagram}</small>
              </span>
            </button>
            
            <button className="contact-btn whatsapp" onClick={handleWhatsAppClick}>
              <span className="btn-icon">💬</span>
              <span className="btn-content">
                <strong>WhatsApp</strong>
                <small>Contatto diretto</small>
              </span>
            </button>
            
            <button className="contact-btn email" onClick={handleEmailClick}>
              <span className="btn-icon">✉️</span>
              <span className="btn-content">
                <strong>Email</strong>
                <small>{contatti.organizzatore.email}</small>
              </span>
            </button>
          </div>
        </div>

        {/* Card Social Evento */}
        <div className="event-social-card">
          <h3>🎭 Seguici sui Social</h3>
          <div className="social-buttons">
            <button className="social-btn main-instagram" onClick={() => handleSocialClick('https://instagram.com/' + contatti.social.instagram.replace('@', ''))}>
              <span className="social-icon">📸</span>
              <div className="social-content">
                <strong>Instagram Ufficiale</strong>
                <span className="social-handle">{contatti.social.instagram}</span>
                <small>Foto, video e aggiornamenti dell'evento</small>
              </div>
            </button>
            
            <div className="hashtag-section">
              <h4>🏷️ Hashtag Ufficiale</h4>
              <div className="hashtag-display" onClick={() => navigator.clipboard.writeText(contatti.social.hashtag)}>
                <span className="hashtag">{contatti.social.hashtag}</span>
                <small>Clicca per copiare</small>
              </div>
            </div>
            
            <div className="website-section">
              <h4>🌐 Website</h4>
              <button className="website-btn" onClick={() => handleSocialClick('https://' + contatti.social.website)}>
                <span className="website-icon">🔗</span>
                <span>{contatti.social.website}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card Location */}
        <div className="location-card">
          <h3>📍 Dove Trovarci</h3>
          <div className="location-info">
            <div className="location-main">
              <h4>{contatti.sede.nome}</h4>
              <p>{contatti.sede.indirizzo}</p>
              <p>{contatti.sede.citta}</p>
            </div>
            
            <button className="maps-btn" onClick={() => handleSocialClick(`https://maps.google.com/?q=${encodeURIComponent(contatti.sede.indirizzo + ', ' + contatti.sede.citta)}`)}>
              <span className="maps-icon">🗺️</span>
              <span>Apri in Google Maps</span>
            </button>
          </div>
        </div>

        {/* Card Info Utili */}
        <div className="useful-info-card">
          <h3>💡 Info Utili</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">⏰</span>
              <div>
                <strong>Orari di Contatto</strong>
                <p>Lun-Ven: 9:00-18:00<br/>Sab: 9:00-13:00</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Modalità Preferita</strong>
                <p>WhatsApp per risposte rapide<br/>Email per richieste dettagliate</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">🎯</span>
              <div>
                <strong>Cosa Chiederci</strong>
                <p>Informazioni partecipazione<br/>Sponsorizzazioni<br/>Collaborazioni</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <strong>Aggiornamenti</strong>
                <p>Seguici su Instagram per<br/>news e anteprime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}