import { useState } from 'react';
import './SezioniAggiuntive.css';

export function SezioniAggiuntive({ iscritti, regolamento, contatti }) {
  const [activeSection, setActiveSection] = useState('iscritti');

  return (
    <section className="sezioni-aggiuntive">
      <h2>📋 Informazioni Dettagliate</h2>
      
      <div className="section-navigation">
        <button 
          className={`section-button ${activeSection === 'iscritti' ? 'active' : ''}`}
          onClick={() => setActiveSection('iscritti')}
        >
          👥 Iscritti ({iscritti.length})
        </button>
        <button 
          className={`section-button ${activeSection === 'regolamento' ? 'active' : ''}`}
          onClick={() => setActiveSection('regolamento')}
        >
          📖 Regolamento
        </button>
        <button 
          className={`section-button ${activeSection === 'contatti' ? 'active' : ''}`}
          onClick={() => setActiveSection('contatti')}
        >
          📞 Contatti
        </button>
      </div>

      <div className="section-content">
        {activeSection === 'iscritti' && (
          <div className="iscritti-sezione">
            <div className="categorie-summary">
              <div className="categoria-card">
                <h4>🏆 Pro</h4>
                <span>{iscritti.filter(p => p.categoria === 'Pro').length}</span>
              </div>
              <div className="categoria-card">
                <h4>🎯 Amateur</h4>
                <span>{iscritti.filter(p => p.categoria === 'Amateur').length}</span>
              </div>
              <div className="categoria-card">
                <h4>👩‍🏁 Women</h4>
                <span>{iscritti.filter(p => p.categoria === 'Women').length}</span>
              </div>
            </div>

            <div className="iscritti-lista">
              {iscritti.map((pilota, index) => (
                <div key={index} className={`iscritto-card categoria-${pilota.categoria.toLowerCase()}`}>
                  <div className="numero-grande">#{pilota.numero}</div>
                  <div className="pilota-info">
                    <div className="nome-pilota">{pilota.pilota}</div>
                    <div className="team-pilota">{pilota.team}</div>
                    <div className="dettagli-pilota">
                      <span className="categoria-badge">{pilota.categoria}</span>
                      <span className="licenza">Lic. {pilota.licenza}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'regolamento' && (
          <div className="regolamento-sezione">
            <div className="regolamento-categoria">
              <h3>⚙️ Regolamento Tecnico</h3>
              <ul>
                {regolamento.tecniche.map((regola, index) => (
                  <li key={index}>{regola}</li>
                ))}
              </ul>
            </div>

            <div className="regolamento-categoria">
              <h3>🏁 Regolamento Sportivo</h3>
              <ul>
                {regolamento.sportive.map((regola, index) => (
                  <li key={index}>{regola}</li>
                ))}
              </ul>
            </div>

            <div className="regolamento-categoria">
              <h3>🛡️ Regolamento Sicurezza</h3>
              <ul>
                {regolamento.sicurezza.map((regola, index) => (
                  <li key={index}>{regola}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'contatti' && (
          <div className="contatti-sezione">
            <div className="contatti-grid">
              <div className="contatto-card">
                <h3>🏢 Organizzazione</h3>
                <div className="contatto-info">
                  <div><strong>{contatti.organizzazione.nome}</strong></div>
                  <div>📞 {contatti.organizzazione.telefono}</div>
                  <div>✉️ {contatti.organizzazione.email}</div>
                  <div>📍 {contatti.organizzazione.indirizzo}</div>
                </div>
              </div>

              <div className="contatto-card emergenze">
                <h3>🚨 Emergenze</h3>
                <div className="contatto-info">
                  <div>🏥 Medico: {contatti.emergenze.medico}</div>
                  <div>🛡️ Sicurezza: {contatti.emergenze.sicurezza}</div>
                  <div>🏁 Direttore Gara: {contatti.emergenze.direttoreGara}</div>
                </div>
              </div>

              <div className="contatto-card">
                <h3>📺 Media</h3>
                <div className="contatto-info">
                  <div>📰 Ufficio Stampa: {contatti.media.ufficiStampa}</div>
                  <div>🎥 Accrediti: {contatti.media.accrediti}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}