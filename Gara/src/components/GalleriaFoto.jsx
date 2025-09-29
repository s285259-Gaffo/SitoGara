import { useState } from 'react';
import './GalleriaFoto.css';

export function GalleriaFoto({ fotoPrecedenti, onBack }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'palco', 'arena', 'backstage', 'premiazione', 'pubblico', 'dettagli'];
  
  const categoryLabels = {
    all: 'Tutte le Foto',
    palco: 'Sul Palco',
    arena: 'Arena',
    backstage: 'Backstage',
    premiazione: 'Premiazioni',
    pubblico: 'Pubblico',
    dettagli: 'Dettagli'
  };

  const filteredPhotos = activeFilter === 'all' 
    ? fotoPrecedenti 
    : fotoPrecedenti.filter(photo => photo.categoria === activeFilter);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <div className="galleria-foto">
      <header className="galleria-header">
        <button className="back-button" onClick={onBack}>
          ← Torna alla Home
        </button>
        <h1>📸 Galleria Foto</h1>
      </header>

      <div className="galleria-content">
        {/* Intro */}
        <div className="galleria-intro">
          <h2>Rivivi i Momenti Epici del Competitio Iuvenes</h2>
          <p>
            Immergiti nell'atmosfera unica dell'evento attraverso queste foto che catturano 
            l'essenza, la passione e la spettacolarità della competizione nel suggestivo Teatro Superga.
          </p>
        </div>

        {/* Filtri categoria */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Contatore foto */}
        <div className="photo-counter">
          <span>{filteredPhotos.length} foto {activeFilter !== 'all' ? `in "${categoryLabels[activeFilter]}"` : 'totali'}</span>
        </div>

        {/* Griglia foto */}
        <div className="photo-grid">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="photo-card"
              onClick={() => openLightbox(photo)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={photo.url} 
                alt={photo.titolo}
                className="photo-image"
                loading="lazy"
                onError={(e) => {
                  // Fallback se l'immagine non carica
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{ display: 'none' }}>
                <div className="photo-icon">📷</div>
                <div className="photo-number">#{photo.id}</div>
              </div>
              <div className="photo-overlay">
                <h3>{photo.titolo}</h3>
                <p>{photo.descrizione}</p>
                <div className="photo-category">{categoryLabels[photo.categoria]}</div>
              </div>
              <div className="photo-hover-effect">
                <span className="view-icon">👁️</span>
                <span className="view-text">Visualizza</span>
              </div>
            </div>
          ))}
        </div>

        {/* Messaggio quando nessuna foto */}
        {filteredPhotos.length === 0 && (
          <div className="no-photos">
            <div className="no-photos-icon">📷</div>
            <h3>Nessuna foto in questa categoria</h3>
            <p>Prova a selezionare una categoria diversa</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            
            <div className="lightbox-photo">
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.titolo}
                className="lightbox-image"
                onError={(e) => {
                  // Fallback se l'immagine non carica
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="lightbox-placeholder" style={{ display: 'none' }}>
                <div className="lightbox-icon">📸</div>
                <div className="lightbox-title">{selectedPhoto.titolo}</div>
              </div>
            </div>
            
            <div className="lightbox-info">
              <h3>{selectedPhoto.titolo}</h3>
              <p>{selectedPhoto.descrizione}</p>
              <div className="lightbox-meta">
                <span className="photo-id">Foto #{selectedPhoto.id}</span>
                <span className="photo-cat">{categoryLabels[selectedPhoto.categoria]}</span>
              </div>
            </div>
            
            <button className="lightbox-nav prev" onClick={prevPhoto}>‹</button>
            <button className="lightbox-nav next" onClick={nextPhoto}>›</button>
            
            <div className="lightbox-counter">
              {filteredPhotos.findIndex(p => p.id === selectedPhoto.id) + 1} di {filteredPhotos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}