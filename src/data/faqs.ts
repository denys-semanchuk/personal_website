export interface IFAQItem {
  question: string;
  answer: string;
}

export const faqData: IFAQItem[] = [
  {
    question: "Quels services proposez-vous ?",
    answer: "Je suis spécialisé dans le développement web, le design UI/UX et l’optimisation des performances. Cela comprend le développement de sites web sur mesure, le design responsive et l’optimisation SEO."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Je travaille principalement avec des technologies web modernes, notamment React, Next.js, TypeScript et Tailwind CSS. J’ai également de l’expérience avec diverses technologies backend et bases de données."
  },
  {
    question: "Combien de temps prend un projet typique ?",
    answer: "La durée d’un projet varie selon sa complexité et son périmètre. Un site web simple peut prendre entre 2 et 4 semaines, tandis que des applications plus complexes peuvent prendre 2 à 3 mois ou davantage."
  },
  {
    question: "Proposez-vous des services de maintenance ?",
    answer: "Oui, je propose des services de maintenance et de support continus afin de garantir que votre site web reste à jour et fonctionne de manière optimale."
  },
  {
    question: "Comment gérez-vous la communication pendant un projet ?",
    answer: "Je maintiens une communication régulière par e-mail, via des appels vidéo planifiés et des outils de gestion de projet afin d’assurer la transparence et des mises à jour en temps voulu."
  }
];