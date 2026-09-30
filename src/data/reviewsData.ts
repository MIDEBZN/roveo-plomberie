export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  service: string;
  comment: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Marc Dupont",
    location: "Mons Centre (7000)",
    date: "Il y a 2 semaines",
    rating: 5,
    service: "Dépannage d'urgence fuite sous évier",
    comment: "Intervention en 25 minutes un samedi soir pour une canalisation fendue. Plombier très courtois et efficace, pièce remplacée sur-le-champ avec devis signé au préalable. Zéro mauvaise surprise sur la facture."
  },
  {
    id: "rev-2",
    author: "Sophie Laurent",
    location: "Jemappes (7012)",
    date: "Il y a 3 semaines",
    rating: 5,
    service: "Débouchage WC et canalisation principale",
    comment: "Après avoir essayé tous les produits du commerce sans résultat, Roveo est venu avec l'équipement haute pression. En une heure, tout était débouché et vérifié à la caméra. Travail très soigné."
  },
  {
    id: "rev-3",
    author: "Julien Mercier",
    location: "Nimy (7020)",
    date: "Il y a 1 mois",
    rating: 5,
    service: "Remplacement chauffe-eau Bulex",
    comment: "Notre ancien boiler est tombé en panne d'un coup. Devis clair reçu en quelques minutes, installation le lendemain matin d'un modèle économique. Chantier laissé parfaitement propre."
  },
  {
    id: "rev-4",
    author: "Claire & Thomas Bernard",
    location: "Cuesmes (7033)",
    date: "Il y a 1 mois",
    rating: 5,
    service: "Rénovation complète salle de bain",
    comment: "Remplacement de notre ancienne baignoire par une grande douche italienne avec robinetterie encastrée. Respect des délais au jour près, conseils avisés et finitions irréprochables."
  },
  {
    id: "rev-5",
    author: "Pierre Vasseur",
    location: "Frontière Maubeuge (59)",
    date: "Il y a 2 mois",
    rating: 5,
    service: "Recherche de fuite invisible",
    comment: "Habitant côté français près de Mons, j'ai fait appel à Roveo pour un dégât des eaux récurrent. Détection thermique rapide sans casser le carrelage. Le rapport pour mon assurance a été accepté sans réserve."
  }
];
