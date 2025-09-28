# 🏎️ Sistema Gestione Gara

Una pagina web completa per visualizzare tutte le informazioni di una gara automobilistica.

## 🚀 Avvio Rapido

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build
```

## 📋 Sezioni Disponibili

### 🏁 Info Gara
- Nome e dettagli della gara
- Data, luogo e categoria
- Status della gara (Iscrizioni Aperte, In Corso, etc.)

### 📅 Programma
- Programma completo diviso per giorni
- Orari delle sessioni
- Durata degli eventi
- Icone colorate per tipo di evento

### 🏆 Classifica
- Classifica aggiornata del campionato
- Podio evidenziato con colori oro/argento/bronzo
- Punti e nazionalità dei piloti

### 📊 Stats & Info (3 Tab)
- **Statistiche**: Partecipanti, team, nazioni
- **Meteo**: Previsioni per i giorni di gara
- **Circuito**: Informazioni tecniche e record

### 📋 Altro (3 Sezioni)
- **Iscritti**: Lista completa piloti per categoria
- **Regolamento**: Tecnico, sportivo e sicurezza
- **Contatti**: Organizzazione, emergenze e media

## 🛠️ Personalizzazione

### Modificare i Dati
Tutti i dati sono nel file `src/data/garaData.js`. Puoi modificare:

```javascript
// Informazioni base della gara
export const garaInfo = {
  nome: "La tua gara",
  data: "Data gara",
  luogo: "Circuito",
  // ...
}

// Aggiungere piloti alla classifica
export const classifica = [
  { posizione: 1, numero: 44, pilota: "Nome Pilota", ... }
]
```

### Aggiungere Nuove Sezioni
1. Crea un nuovo componente in `src/components/`
2. Aggiungi i dati in `src/data/garaData.js`
3. Importa e usa in `src/App.jsx`

## 🌐 Deploy Gratuito

### Netlify (Consigliato)
1. Fai il build: `npm run build`
2. Vai su [netlify.com](https://netlify.com)
3. Trascina la cartella `dist` nel deploy area
4. ✅ Il tuo sito è online!

### Vercel
1. Installa Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Segui le istruzioni

### GitHub Pages
1. Installa gh-pages: `npm install --save-dev gh-pages`
2. Aggiungi al package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📱 Responsive Design

Il sito è completamente responsive e funziona su:
- 💻 Desktop
- 📱 Mobile
- 📊 Tablet

## 🎨 Personalizzazione Stile

### Colori Principali
I colori sono definiti nei file CSS. Principali:
- Primario: `#667eea` (blu-viola)
- Successo: `#28a745` (verde)
- Avviso: `#ffc107` (giallo)
- Errore: `#dc3545` (rosso)

### Layout
- Sistema di griglie responsive
- Cards con ombre e hover effects
- Navigazione sticky
- Gradient backgrounds

## 📊 Tecnologie Usate

- ⚛️ **React 19** - Frontend framework
- ⚡ **Vite** - Build tool veloce
- 🎨 **CSS3** - Styling responsive
- 📱 **Mobile-first** design

## 🔄 Aggiornamenti Futuri

Puoi facilmente aggiungere:
- ⏱️ Timer live per la gara
- 📸 Galleria foto
- 🎥 Video highlights
- 📈 Grafici real-time
- 💬 Chat commentatori
- 🔔 Notifiche push

## 📞 Supporto

Per domande o personalizzazioni, contatta l'organizzazione della gara.

---

**Made with ❤️ for motorsport enthusiasts**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
