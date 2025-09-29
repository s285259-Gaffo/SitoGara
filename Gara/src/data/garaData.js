// Dati dell'evento Competitio Iuvenes
export const eventoInfo = {
  nome: "COMPETITIO IUVENES",
  data: "5 Maggio 2024",
  luogo: "Teatro Superga, Nichelino",
  indirizzo: "Via Superga, 44, 10042 Nichelino, TO",
  categoria: "Competizione Fitness & Bodybuilding",
  descrizione: "La più spettacolare competizione giovanile di bodybuilding e fitness in un'arena antica e suggestiva",
  status: "Evento Completato",
  organizzatore: "Andrea Romeo",
  backgroundImage: "/images/arena-background.jpg"
};

// Programma dell'evento (opzionale - usato solo se mostri la sezione programma)
export const programmaEvento = [
  {
    ora: "14:00",
    attivita: "Registrazione atleti e controlli medici",
    tipo: "registrazione"
  },
  {
    ora: "15:00", 
    attivita: "Briefing tecnico e sorteggio ordine di gara",
    tipo: "briefing"
  },
  {
    ora: "16:00",
    attivita: "Inizio competizioni - Categorie Juniores",
    tipo: "gara"
  },
  {
    ora: "18:00",
    attivita: "Competizioni Senior e Women",
    tipo: "gara"
  },
  {
    ora: "19:30",
    attivita: "Premiazioni e cerimonia di chiusura",
    tipo: "premiazione"
  }
];

// Info evento (manteniamo solo quelle essenziali)
export const infoEvento = {
  categorie: [
    "Men's Physique Junior",
    "Men's Physique Senior", 
    "Classic Physique",
    "Women's Bikini",
    "Women's Wellness"
  ],
  numeroPartecipanti: 25,
  nazionalita: ["Italia", "Francia", "Svizzera", "Germania"]
};

export const contatti = {
  organizzatore: {
    nome: "Andrea Romeo",
    instagram: "@andrea__rm",
    whatsapp: "+39 XXX XXX XXXX", // Sostituisci con il numero reale
    email: "info@competitioiuvenes.it",
  },
  social: {
    instagram: "@competitio_iuvenes",
    hashtag: "#CompetitioIuvenes",
    website: "www.competitioniuvenes.it",
  },
  sede: {
    nome: "Teatro Superga",
    indirizzo: "Via Superga, 44, 10042 Nichelino, TO",
    citta: "Nichelino, Torino",
  },
};

export const fotoPrecedenti = [
  {
    id: 1,
    titolo: "Momento Epico sul Palco",
    descrizione: "Atleta in posa finale nell'arena storica",
    url: "/images/galleria/foto1.jpg",
    categoria: "palco",
  },
  {
    id: 2,
    titolo: "Atmosfera dell'Arena",
    descrizione: "La suggestiva cornice del Teatro Superga",
    url: "/images/galleria/foto2.jpg",
    categoria: "arena",
  },
  {
    id: 3,
    titolo: "Preparazione Backstage",
    descrizione: "Gli atleti si preparano per la competizione",
    url: "/images/galleria/foto3.jpg",
    categoria: "backstage",
  },
  {
    id: 4,
    titolo: "Momento di Gloria",
    descrizione: "Premiazione dei vincitori",
    url: "/images/galleria/foto4.jpg",
    categoria: "premiazione",
  },
  {
    id: 5,
    titolo: "Pubblico in Delirio",
    descrizione: "L'energia del pubblico nell'arena",
    url: "/images/galleria/foto5.jpg",
    categoria: "pubblico",
  },
  {
    id: 6,
    titolo: "Dettagli Artistici",
    descrizione: "I dettagli architettonici del teatro",
    url: "/images/galleria/foto6.jpg",
    categoria: "dettagli",
  },
];
