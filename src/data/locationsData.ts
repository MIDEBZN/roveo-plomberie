export interface LocationItem {
  id: string;
  name: string;
  postalCode: string;
  distance: string;
  responseTime: string;
  description: string;
  coverage: string[];
}

export const locationsData: LocationItem[] = [
  {
    id: "mons-centre",
    name: "Mons Centre & Intra-muros",
    postalCode: "7000",
    distance: "0 km (Base opérationnelle)",
    responseTime: "Moins de 20 minutes",
    description: "Interventions prioritaires en hypercentre montois, Grand'Place, quartier de la gare, campus universitaire et rues piétonnes avec stationnement adapté.",
    coverage: ["Grand'Place", "Boulevard Dolez", "Gare de Mons", "Avenue Frère Orban", "Quartier des Prés"]
  },
  {
    id: "cuesmes",
    name: "Cuesmes",
    postalCode: "7033",
    distance: "3.5 km",
    responseTime: "25 minutes",
    description: "Service de plomberie pour maisons mitoyennes et résidences récentes. Dépannage rapide pour fuites d'eau et débouchages de canalisations.",
    coverage: ["Place de Cuesmes", "Rue de Frameries", "Cité de la Balance", "Grand-Bouillon"]
  },
  {
    id: "jemappes",
    name: "Jemappes",
    postalCode: "7012",
    distance: "5 km",
    responseTime: "25 minutes",
    description: "Dépannage plomberie d'urgence et installation d'équipements sanitaires sur l'ensemble du secteur de Jemappes le long de l'axe autoroutier E19/E42.",
    coverage: ["Avenue Maréchal Foch", "Pont du Canal", "Zone commerciale", "Quartier Flénu"]
  },
  {
    id: "ghlin",
    name: "Ghlin",
    postalCode: "7011",
    distance: "4.8 km",
    responseTime: "25 minutes",
    description: "Interventions rapides pour habitations privées et locaux industriels. Spécialistes des colonnes d'eaux usées et remplacement de ballons d'eau chaude.",
    coverage: ["Zone industrielle de Ghlin-Baudour", "Rue du Festinoy", "Rue de Mons", "Busteau"]
  },
  {
    id: "nimy",
    name: "Nimy",
    postalCode: "7020",
    distance: "3.2 km",
    responseTime: "20 minutes",
    description: "Dépannage sanitaire réactif dans la zone nord de Mons, à proximité du Grand Large et du canal du Centre.",
    coverage: ["Rue des Viaducs", "Quartier du Grand Large", "Chaussée de Bruxelles", "Maisières limitrophe"]
  },
  {
    id: "havre",
    name: "Havré",
    postalCode: "7021",
    distance: "7.5 km",
    responseTime: "30 minutes",
    description: "Plomberie générale, remplacement de tuyauteries anciennes et rénovation complète de salles de bain pour villas et maisons individuelles.",
    coverage: ["Château d'Havré", "Rue du Bois", "Quartier de Boussoit", "Les Bruyères"]
  },
  {
    id: "hyon-ciply",
    name: "Hyon & Ciply",
    postalCode: "7022",
    distance: "4 km",
    responseTime: "25 minutes",
    description: "Assistance complète pour maisons traditionnelles et copropriétés: réglage de pression d'eau, traitement du calcaire et recherche de fuite sans casse.",
    coverage: ["Place d'Hyon", "Chaussée de Beaumont", "Mont-Panisel", "Ciply centre"]
  },
  {
    id: "saint-symphorien",
    name: "Saint-Symphorien & Spiennes",
    postalCode: "7030",
    distance: "6 km",
    responseTime: "30 minutes",
    description: "Interventions programmées et dépannages urgents pour habitations unifamiliales. Débouchage mécanique et changement de sanitaires.",
    coverage: ["Chaussée Roi Baudouin", "Spiennes", "Campagne de Saint-Symphorien", "Villers-Saint-Ghislain"]
  },
  {
    id: "frameries",
    name: "Frameries & Borinage",
    postalCode: "7080",
    distance: "8 km",
    responseTime: "30 minutes",
    description: "Couverture intégrale de Frameries, Eugies et La Bouverie pour tous travaux de robinetterie, chauffe-eau et rénovation de plomberie.",
    coverage: ["Frameries centre", "Eugies", "La Bouverie", "Noirchain", "Sars-la-Bruyère"]
  },
  {
    id: "boussu-st-ghislain",
    name: "Boussu & Saint-Ghislain",
    postalCode: "7300",
    distance: "12 km",
    responseTime: "35 minutes",
    description: "Plombiers professionnels intervenant le long du couloir Borinage ouest pour les particuliers, commerces et bâtiments publics.",
    coverage: ["Saint-Ghislain centre", "Boussu-Bois", "Tertre", "Hautrage"]
  },
  {
    id: "frontiere-france",
    name: "Zone Frontalière Franco-Belge",
    postalCode: "59600 / 59570",
    distance: "15 à 25 km",
    responseTime: "35 à 45 minutes",
    description: "Proximité directe avec le département du Nord (59). Roveo répond aux demandes de clients français frontaliers recherchant une main-d'œuvre certifiée et des tarifs transparents.",
    coverage: ["Maubeuge", "Bavay", "Jeumont", "Feignies", "Valenciennes Est"]
  }
];
