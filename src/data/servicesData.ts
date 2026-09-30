export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  emergency: boolean;
  priceFrom: string;
  delay: string;
  features: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "depannage-urgence",
    title: "Dépannage d'urgence 24/7",
    slug: "depannage-urgence",
    shortDescription: "Intervention express en 30 minutes à Mons pour fuite d'eau, rupture de canalisation ou débordement.",
    fullDescription: "Une canalisation percée ou une fuite soudaine nécessite une action immédiate pour limiter les dégâts matériels. Notre équipe de plombiers d'astreinte intervient 24h sur 24 et 7 jours sur 7 dans toute l'agglomération de Mons avec un équipement complet pour couper la fuite, sécuriser votre réseau et remplacer les pièces défectueuses.",
    emergency: true,
    priceFrom: "89 €",
    delay: "30 minutes",
    features: [
      "Disponible 24h/24, nuits, week-ends et jours fériés",
      "Arrivée rapide avec camion atelier tout équipé",
      "Recherche immédiate et colmatage de la fuite",
      "Sécurisation des installations sanitaires et électriques adjacentes"
    ],
    icon: "zap"
  },
  {
    id: "recherche-fuite",
    title: "Recherche de fuite non destructive",
    slug: "recherche-fuite",
    shortDescription: "Localisation exacte par thermographie infrarouge, corrélation acoustique et gaz traceur sans casser vos murs.",
    fullDescription: "Trace d'humidité inexpliquée, facture d'eau en hausse ou compteur qui tourne sans robinet ouvert ? Nous utilisons des technologies non invasives de pointe pour repérer l'origine précise de l'infiltration dans les canalisations encastrées ou enterrées. Nous vous remettons un rapport technique détaillé pour votre compagnie d'assurance.",
    emergency: false,
    priceFrom: "145 €",
    delay: "Sous 24 heures",
    features: [
      "Inspection par caméra thermique infrarouge",
      "Écoute électroacoustique des réseaux sous pression",
      "Détection par gaz traceur pour micro-fuites",
      "Rapport d'expertise pour remboursement assurance dégât des eaux"
    ],
    icon: "search"
  },
  {
    id: "debouchage-canalisations",
    title: "Débouchage & hydrocurage",
    slug: "debouchage-canalisations",
    shortDescription: "Débouchage haute pression pour WC, éviers, douches et colonnes d'eaux usées avec contrôle caméra.",
    fullDescription: "Lorsque les produits usuels ne suffisent plus et que l'évacuation stagne, notre unité d'hydrocurage mobile propulse de l'eau sous haute pression pour désagréger bouchons de calcaire, amas de graisse et racines. L'inspection vidéo par caméra endoscopique permet de valider le nettoyage intégral de la conduite.",
    emergency: true,
    priceFrom: "95 €",
    delay: "Dans la journée",
    features: [
      "Hydrocurage à haute pression respectueux des canalisations",
      "Caméra d'inspection haute définition pour vérifier l'état des tuyaux",
      "Débouchage de colonnes collectives, fosses et regards extérieurs",
      "Traitement préventif contre les dépôts de calcaire et savon"
    ],
    icon: "droplet"
  },
  {
    id: "chauffe-eau-boiler",
    title: "Chauffe-eau & boilers",
    slug: "chauffe-eau-boiler",
    shortDescription: "Installation, détartrage et dépannage de ballons d'eau chaude électriques, au gaz et thermodynamiques.",
    fullDescription: "Plus d'eau chaude, bruit suspect de sifflement ou écoulement permanent au niveau du groupe de sécurité ? Roveo assure l'entretien annuel, le remplacement de résistance, le détartrage de cuve et la pose de nouveaux boilers à haute efficacité énergétique adaptés à la taille de votre foyer.",
    emergency: false,
    priceFrom: "120 €",
    delay: "Sous 24h à 48h",
    features: [
      "Dépannage toutes marques: Vaillant, Bulex, Ariston, Atlantic",
      "Détartrage complet de la cuve et remplacement de l'anode magnésium",
      "Pose de chauffe-eau thermodynamique économique",
      "Remplacement du groupe de sécurité et réducteur de pression"
    ],
    icon: "flame"
  },
  {
    id: "renovation-sanitaire",
    title: "Rénovation de salle de bain",
    slug: "renovation-sanitaire",
    shortDescription: "Transformation complète: remplacement de baignoire par douche à l'italienne, meubles vasques et robinetterie.",
    fullDescription: "Nous concrétisons votre projet de salle de bain sur mesure. De la refonte du réseau de plomberie (cuivre, multicouche) à la pose des sanitaires design, receveurs extra-plats et parois vitrées, notre équipe garantit une étanchéité parfaite et des finitions soignées pour un confort durable.",
    emergency: false,
    priceFrom: "Sur devis gratuit",
    delay: "Planification sur mesure",
    features: [
      "Conception personnalisée et conseils d'agencement",
      "Pose de receveurs de douche ultra-plats et caniveaux d'évacuation",
      "Raccordement complet en tubes multicouche sans raccord invisible",
      "Garantie décennale sur l'ensemble des travaux d'étanchéité"
    ],
    icon: "home"
  },
  {
    id: "robinetterie-wc",
    title: "Robinetterie & WC suspendus",
    slug: "robinetterie-wc",
    shortDescription: "Pose et réparation de bâtis-supports suspendus Geberit, mitigeurs thermostatiques et mécanismes de chasse.",
    fullDescription: "Un robinet qui goutte ou une chasse d'eau qui fuit en continu peut gaspiller jusqu'à plusieurs centaines de litres par jour. Nous remplaçons vos joints, cartouches céramiques, mécanismes de flotteur et installons des WC suspendus modernes pour un entretien simplifié et une hygiène maximale.",
    emergency: false,
    priceFrom: "75 €",
    delay: "Dans la journée",
    features: [
      "Installation de bâtis Geberit et cuvettes sans bride (rimless)",
      "Robinetterie thermostatique Grohe, Hansgrohe et marques partenaires",
      "Remplacement express des mécanismes de chasse d'eau défaillants",
      "Installation de réducteurs de pression et filtres anti-tartre"
    ],
    icon: "wrench"
  }
];
