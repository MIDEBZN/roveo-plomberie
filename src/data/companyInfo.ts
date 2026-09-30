export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  emergencyPhone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    region: string;
  };
  bceNumber: string;
  tvaNumber: string;
  openingHours: {
    emergency: string;
    standard: string;
  };
  guarantees: string[];
}

export const companyInfo: CompanyInfo = {
  name: "Roveo",
  tagline: "Plomberie d'urgence et sanitaire de précision à Mons",
  description: "Entreprise artisanale de plomberie et de dépannage sanitaire à Mons. Interventions d'urgence 24h/7j, recherche de fuite non destructive, débouchage haute pression et rénovations complètes de sanitaires pour particuliers et professionnels.",
  phone: "+3265981234",
  phoneDisplay: "065 98 12 34",
  emergencyPhone: "065 98 12 34",
  email: "contact@roveo-plomberie.be",
  address: {
    street: "Grand'Place 24",
    city: "Mons",
    postalCode: "7000",
    country: "Belgique",
    region: "Hainaut / Wallonie"
  },
  bceNumber: "0845.921.730",
  tvaNumber: "BE 0845.921.730",
  openingHours: {
    emergency: "24h/24 et 7j/7 sans interruption",
    standard: "Du lundi au samedi de 08:00 à 19:00"
  },
  guarantees: [
    "Arrivée sur site en 30 minutes pour les urgences à Mons",
    "Devis clair et transparent avant chaque intervention",
    "Artisans certifiés avec assurance décennale",
    "Matériel de pointe pour détection sans destruction",
    "Tarification fixe et sans majoration abusive"
  ]
};
