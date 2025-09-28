import { useState } from 'react'
import './App.css'

// Importa i dati
import { 
  garaInfo, 
  programma, 
  classifica, 
  iscritti, 
  regolamento, 
  meteo, 
  circuito, 
  statistiche, 
  contatti 
} from './data/garaData'

// Importa i componenti
import { InfoGara } from './components/InfoGara'
import { Programma } from './components/Programma'
import { Classifica } from './components/Classifica'
import { Statistiche } from './components/Statistiche'
import { SezioniAggiuntive } from './components/SezioniAggiuntive'

function App() {
  const [activeSection, setActiveSection] = useState('info')

  const sections = [
    { id: 'info', name: '🏁 Info Gara', component: <InfoGara garaInfo={garaInfo} /> },
    { id: 'programma', name: '📅 Programma', component: <Programma programma={programma} /> },
    { id: 'classifica', name: '🏆 Classifica', component: <Classifica classifica={classifica} /> },
    { id: 'statistiche', name: '📊 Stats & Info', component: <Statistiche statistiche={statistiche} meteo={meteo} circuito={circuito} /> },
    { id: 'altro', name: '📋 Altro', component: <SezioniAggiuntive iscritti={iscritti} regolamento={regolamento} contatti={contatti} /> }
  ]

  return (
    <div className="app">
      <nav className="main-navigation">
        <div className="nav-header">
          <h1 className="nav-title">🏎️ Gestione Gara</h1>
        </div>
        <div className="nav-buttons">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.name}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        <div className="content-container">
          {sections.find(section => section.id === activeSection)?.component}
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2025 Sistema Gestione Gare - Aggiornato in tempo reale</p>
      </footer>
    </div>
  )
}

export default App
