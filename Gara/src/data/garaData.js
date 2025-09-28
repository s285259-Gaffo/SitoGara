// Dati della gara - puoi modificare questi dati facilmente
export const garaInfo = {
  nome: "Gran Premio di Primavera 2025",
  data: "15 Maggio 2025",
  luogo: "Autodromo di Monza",
  categoria: "Formula Regional",
  descrizione: "La gara più attesa della stagione con piloti da tutta Europa",
  status: "Iscrizioni Aperte" // "In Corso", "Completata", "Annullata"
};

export const programma = [
  {
    giorno: "Venerdì 13 Maggio",
    eventi: [
      { ora: "09:00", evento: "Verifiche Tecniche", tipo: "tecnico" },
      { ora: "10:30", evento: "Briefing Piloti", tipo: "briefing" },
      { ora: "14:00", evento: "Prove Libere 1", tipo: "pista", durata: "45 min" },
      { ora: "16:30", evento: "Prove Libere 2", tipo: "pista", durata: "45 min" }
    ]
  },
  {
    giorno: "Sabato 14 Maggio",
    eventi: [
      { ora: "09:00", evento: "Prove Libere 3", tipo: "pista", durata: "30 min" },
      { ora: "11:00", evento: "Qualifiche", tipo: "qualifica", durata: "20 min" },
      { ora: "15:00", evento: "Gara Sprint", tipo: "gara", durata: "25 min" }
    ]
  },
  {
    giorno: "Domenica 15 Maggio",
    eventi: [
      { ora: "09:30", evento: "Warm-Up", tipo: "pista", durata: "15 min" },
      { ora: "14:00", evento: "GARA PRINCIPALE", tipo: "gara", durata: "45 min" },
      { ora: "16:00", evento: "Premiazioni", tipo: "cerimonia" }
    ]
  }
];

export const classifica = [
  { posizione: 1, numero: 44, pilota: "Marco Rossi", team: "Racing Team Alpha", punti: 125, nazionalita: "🇮🇹" },
  { posizione: 2, numero: 7, pilota: "Jean Dubois", team: "Speed Demons", punti: 98, nazionalita: "🇫🇷" },
  { posizione: 3, numero: 23, pilota: "Hans Mueller", team: "Thunder Racing", punti: 87, nazionalita: "🇩🇪" },
  { posizione: 4, numero: 12, pilota: "Carlos Silva", team: "Fire Hawks", punti: 76, nazionalita: "🇪🇸" },
  { posizione: 5, numero: 8, pilota: "Tom Wilson", team: "British Motors", punti: 65, nazionalita: "🇬🇧" },
  { posizione: 6, numero: 31, pilota: "Luigi Bianchi", team: "Veloce Italia", punti: 54, nazionalita: "🇮🇹" },
  { posizione: 7, numero: 19, pilota: "Alex Petrov", team: "Red Storm", punti: 43, nazionalita: "🇷🇺" },
  { posizione: 8, numero: 5, pilota: "Erik Larsson", team: "Nordic Speed", punti: 32, nazionalita: "🇸🇪" }
];

export const iscritti = [
  { numero: 44, pilota: "Marco Rossi", team: "Racing Team Alpha", categoria: "Pro", licenza: "A1234" },
  { numero: 7, pilota: "Jean Dubois", team: "Speed Demons", categoria: "Pro", licenza: "F5678" },
  { numero: 23, pilota: "Hans Mueller", team: "Thunder Racing", categoria: "Pro", licenza: "D9012" },
  { numero: 12, pilota: "Carlos Silva", team: "Fire Hawks", categoria: "Pro", licenza: "E3456" },
  { numero: 8, pilota: "Tom Wilson", team: "British Motors", categoria: "Pro", licenza: "G7890" },
  { numero: 31, pilota: "Luigi Bianchi", team: "Veloce Italia", categoria: "Amateur", licenza: "I2345" },
  { numero: 19, pilota: "Alex Petrov", team: "Red Storm", categoria: "Amateur", licenza: "R6789" },
  { numero: 5, pilota: "Erik Larsson", team: "Nordic Speed", categoria: "Amateur", licenza: "S0123" },
  { numero: 77, pilota: "Anna Kowalski", team: "Eagle Racing", categoria: "Women", licenza: "P4567" },
  { numero: 15, pilota: "Sarah Johnson", team: "Pink Lightning", categoria: "Women", licenza: "U8901" }
];

export const circuito = {
  nome: "Autodromo Nazionale di Monza",
  lunghezza: "5.793 km",
  curve: 11,
  settori: 3,
  recordGiro: {
    tempo: "1:21.046",
    pilota: "Lewis Hamilton",
    anno: "2020"
  },
  caratteristiche: [
    "Rettilineo principale di 1.2 km",
    "Alta velocità media",
    "Zona DRS attiva",
    "Curva Parabolica famosa in tutto il mondo"
  ]
};

export const regolamento = {
  tecniche: [
    "Peso minimo vettura: 580 kg (con pilota)",
    "Motore: 4 cilindri turbo max 1600cc",
    "Pneumatici: forniti dall'organizzazione",
    "Carburante: benzina senza piombo 98 ottani",
    "Dispositivi di sicurezza obbligatori"
  ],
  sportive: [
    "Durata gara: 45 minuti + 1 giro",
    "Partenza: procedura rolling start",
    "Penalità: 5-10-20 secondi o drive-through",
    "Bandiera a scacchi: primo classificato che taglia il traguardo",
    "Punti: 25-18-15-12-10-8-6-4-2-1 (primi 10)"
  ],
  sicurezza: [
    "Casco omologato FIA obbligatorio",
    "Tuta ignifuga FIA 8856-2018",
    "Guanti e scarpe omologate",
    "Sistema HANS obbligatorio",
    "Estintore a bordo vettura"
  ]
};

export const meteo = {
  previsioni: [
    { giorno: "Venerdì", temp: "22°C", condizioni: "Soleggiato", probabilitaPioggia: "10%", vento: "5 km/h" },
    { giorno: "Sabato", temp: "25°C", condizioni: "Parzialmente nuvoloso", probabilitaPioggia: "20%", vento: "8 km/h" },
    { giorno: "Domenica", temp: "24°C", condizioni: "Nuvoloso", probabilitaPioggia: "40%", vento: "12 km/h" }
  ]
};

export const statistiche = {
  partecipanti: {
    totale: 45,
    pro: 20,
    amateur: 18,
    women: 7
  },
  nazioni: ["Italia", "Francia", "Germania", "Spagna", "Regno Unito", "Svezia", "Russia", "Polonia"],
  teamPartecipanti: 15,
  spettatori: {
    previsti: 25000,
    capacitaCircuito: 30000
  }
};

export const contatti = {
  organizzazione: {
    nome: "Automobile Club di Monza",
    telefono: "+39 039 24821",
    email: "info@monzanet.it",
    indirizzo: "Parco di Monza, 20900 Monza (MB)"
  },
  emergenze: {
    medico: "+39 039 123456",
    sicurezza: "+39 039 789012",
    direttoreGara: "+39 339 345678"
  },
  media: {
    ufficiStampa: "stampa@monzanet.it",
    accrediti: "media@monzanet.it"
  }
};