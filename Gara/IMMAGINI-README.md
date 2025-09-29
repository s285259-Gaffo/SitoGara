# 📸 Come Aggiungere le Immagini al Sito

## 📁 Struttura delle Cartelle

Metti tutte le immagini nella cartella `public/images/` che ho già creato:

```
Gara/
├── public/
│   ├── images/
│   │   ├── arena-background.jpg          ⭐ PRINCIPALE
│   │   └── galleria/
│   │       ├── foto1.jpg
│   │       ├── foto2.jpg  
│   │       ├── foto3.jpg
│   │       ├── foto4.jpg
│   │       ├── foto5.jpg
│   │       └── foto6.jpg
```

## 🏛️ **IMMAGINE PRINCIPALE (OBBLIGATORIA)**

**Nome file**: `arena-background.jpg`
**Posizione**: `Gara/public/images/arena-background.jpg`
**Descrizione**: Questa sarà l'immagine di sfondo della home page
**Dimensioni consigliate**: 1920x1080px o superiori
**Formato**: JPG o PNG

⚠️ **IMPORTANTE**: Questa immagine DEVE esistere, altrimenti vedrai solo il gradiente di fallback.

## 📸 **FOTO GALLERIA (Opzionali)**

**Posizione**: `Gara/public/images/galleria/`
**Nomi file**: 
- `foto1.jpg` - Momento Epico sul Palco
- `foto2.jpg` - Atmosfera dell'Arena  
- `foto3.jpg` - Preparazione Backstage
- `foto4.jpg` - Momento di Gloria
- `foto5.jpg` - Pubblico in Delirio
- `foto6.jpg` - Dettagli Artistici

**Dimensioni consigliate**: 800x600px o superiori
**Formato**: JPG o PNG

## 🔧 Come Aggiungere/Cambiare Foto

### Per aggiungere più foto:
1. Metti le nuove immagini in `public/images/galleria/`
2. Vai in `src/data/garaData.js`
3. Aggiungi nuovi oggetti all'array `fotoPrecedenti`:

```javascript
{
  id: 7,
  titolo: "Nuova Foto",
  descrizione: "Descrizione della foto",
  url: "/images/galleria/foto7.jpg",
  categoria: "palco" // palco, arena, backstage, premiazione, pubblico, dettagli
}
```

### Per cambiare i nomi dei file:
Se hai foto con nomi diversi (es. `competizio1.jpg`), puoi:

**Opzione 1**: Rinominare i file con i nomi che ho impostato
**Opzione 2**: Cambiare i percorsi in `garaData.js`:

```javascript
// Cambia da:
url: "/images/galleria/foto1.jpg",
// A:
url: "/images/galleria/competizio1.jpg",
```

## 📋 Checklist Rapida

- [ ] `arena-background.jpg` nella cartella `public/images/`
- [ ] Le 6 foto nella cartella `public/images/galleria/`
- [ ] Riavvia il server (`npm run dev`) dopo aver aggiunto le immagini
- [ ] Controlla che il sito carichi correttamente

## 🚨 Risoluzione Problemi

**Se le immagini non si vedono**:
1. Verifica che i file siano nella cartella giusta
2. Controlla che i nomi dei file corrispondano esattamente
3. Riavvia il server di sviluppo
4. Apri gli strumenti sviluppatore (F12) e controlla la console per errori

**Formati supportati**: JPG, PNG, WebP, SVG
**Peso consigliato**: Max 2MB per foto per prestazioni ottimali