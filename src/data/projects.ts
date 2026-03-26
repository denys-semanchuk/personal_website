export interface Project {
  id: number;
  type?: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  benefits: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    type: "concept",
    title: "Jardin Fleuri",
    description:
      "Site vitrine pour fleuriste de quartier. Galerie de créations, services de livraison, localisation et contact direct pour les commandes.",
    image: "/projects/jardin-fleuri.png",
    benefits: [
      "Galerie florale élégante",
      "Livraison locale mise en avant",
      "Contact rapide pour les commandes",
      "Image professionnelle du commerce",
    ],
  },
  {
    id: 2,
    type: "concept",
    title: "Prestige Cœur",
    description:
      "Plateforme professionnelle pour salon de coiffure. Présentation des coupes, équipe, tarifs, prise de RDV en ligne et localisation GPS.",
    image: "/projects/prestige-coeur.png",
    benefits: [
      "Services et tarifs clairs",
      "Équipe mise en avant",
      "Réservation simple et rapide",
      "Image premium du salon",
    ],
  },
  {
    id: 3,
    type: "concept",
    title: "La Maison du Goût",
    description:
      "Site pour petite épicerie de proximité. Présentation des spécialités, horaires, localisation et contact pour fidéliser la clientèle locale.",
    image: "/projects/la-maison-du-gout.png",
    benefits: [
      "Spécialités mises en valeur",
      "Horaires faciles à trouver",
      "Contact local simplifié",
      "Image de confiance",
    ],
  },
  // {
  //   id: 4,
  //   title: "Next Pizza",
  //   description: "Un service de commande de pizzas rapide et pratique",
  //   image: "/projects/next-pizza.png",
  //   liveUrl: "https://next-pizza-phi-murex.vercel.app",
  //   githubUrl: "https://github.com/denys-semanchuk/pizza",
  //   benefits: [
  //     "Commande rapide et intuitive",
  //     "Parcours client simplifié",
  //     "Présentation claire du menu",
  //     "Expérience moderne et fluide",
  //   ],
  // },
];
