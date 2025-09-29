import { useState } from 'react';
import '../styles/Statistiche.css';

export function Statistiche({ statistiche, meteo, circuito }) {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <section className="statistiche">
      <h2>📊 Informazioni Aggiuntive</h2>
      
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          📈 Statistiche
        </button>
        <button 
          className={`tab-button ${activeTab === 'meteo' ? 'active' : ''}`}
          onClick={() => setActiveTab('meteo')}
        >
          🌤️ Meteo
        </button>
        <button 
          className={`tab-button ${activeTab === 'circuito' ? 'active' : ''}`}
          onClick={() => setActiveTab('circuito')}
        >
          🏁 Circuito
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'stats' && (
          <div className="stats-grid">
            <div className="stat-card">
              <h3>👥 Partecipanti</h3>
              <div className="stat-number">{statistiche.partecipanti.totale}</div>
              <div className="stat-breakdown">
                <div>Pro: {statistiche.partecipanti.pro}</div>
                <div>Amateur: {statistiche.partecipanti.amateur}</div>
                <div>Women: {statistiche.partecipanti.women}</div>
              </div>
            </div>
            
            <div className="stat-card">
              <h3>🏁 Team</h3>
              <div className="stat-number">{statistiche.teamPartecipanti}</div>
              <div className="stat-description">Team iscritti</div>
            </div>
            
            <div className="stat-card">
              <h3>🎪 Spettatori</h3>
              <div className="stat-number">{statistiche.spettatori.previsti.toLocaleString()}</div>
              <div className="stat-description">Previsti (max {statistiche.spettatori.capacitaCircuito.toLocaleString()})</div>
            </div>
            
            <div className="stat-card full-width">
              <h3>🌍 Nazioni Partecipanti</h3>
              <div className="nazioni-list">
                {statistiche.nazioni.map((nazione, index) => (
                  <span key={index} className="nazione-badge">{nazione}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'meteo' && (
          <div className="meteo-grid">
            {meteo.previsioni.map((giorno, index) => (
              <div key={index} className="meteo-card">
                <h3>{giorno.giorno}</h3>
                <div className="meteo-temp">{giorno.temp}</div>
                <div className="meteo-condizioni">{giorno.condizioni}</div>
                <div className="meteo-dettagli">
                  <div>☔ Pioggia: {giorno.probabilitaPioggia}</div>
                  <div>💨 Vento: {giorno.vento}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'circuito' && (
          <div className="circuito-info">
            <div className="circuito-header">
              <h3>{circuito.nome}</h3>
            </div>
            
            <div className="circuito-specs">
              <div className="spec-item">
                <span className="spec-label">📏 Lunghezza:</span>
                <span className="spec-value">{circuito.lunghezza}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">🔄 Curve:</span>
                <span className="spec-value">{circuito.curve}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">📊 Settori:</span>
                <span className="spec-value">{circuito.settori}</span>
              </div>
            </div>

            <div className="record-giro">
              <h4>🏆 Record del Giro</h4>
              <div className="record-details">
                <div className="record-tempo">{circuito.recordGiro.tempo}</div>
                <div className="record-pilota">{circuito.recordGiro.pilota} ({circuito.recordGiro.anno})</div>
              </div>
            </div>

            <div className="caratteristiche">
              <h4>✨ Caratteristiche</h4>
              <ul>
                {circuito.caratteristiche.map((caratteristica, index) => (
                  <li key={index}>{caratteristica}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}