import { useState } from 'react'
import './App.css'

// Importa i dati
import { 
  eventoInfo,
  contatti,
  fotoPrecedenti
} from './data/garaData'

// Importa i componenti
import { LandingPage } from './components/LandingPage'
import { InformazioniGenerali } from './components/InformazioniGenerali'
import { ContattiSocial } from './components/ContattiSocial'
import { GalleriaFoto } from './components/GalleriaFoto'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const handleNavigation = (section) => {
    setCurrentView(section)
  }

  const handleBackToHome = () => {
    setCurrentView('home')
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'info':
        return <InformazioniGenerali eventoInfo={eventoInfo} onBack={handleBackToHome} />
      case 'social':
        return <ContattiSocial contatti={contatti} onBack={handleBackToHome} />
      case 'galleria':
        return <GalleriaFoto fotoPrecedenti={fotoPrecedenti} onBack={handleBackToHome} />
      default:
        return <LandingPage onNavigate={handleNavigation} eventoInfo={eventoInfo} />
    }
  }

  return (
    <div className="app">
      {renderCurrentView()}
    </div>
  )
}

export default App
