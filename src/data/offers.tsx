import { LuFileText, LuGlobe, LuRefreshCw } from "react-icons/lu";

export const offers = [
  {
    icon: <LuFileText className="w-10 h-10 text-primary" />,
    title: "Site 1 page",
    price: "À partir de 400€",
    description:
      "Solution simple pour débuter. Parfait pour afficher vos horaires, services et coordonnées.",
  },
  {
    icon: <LuGlobe className="w-10 h-10 text-primary" />,
    title: "Site vitrine complet",
    price: "À partir de 600€",
    description:
      "Présentation complète de votre activité. Galerie, descriptions, prise de contact, localisation.",
  },
  {
    icon: <LuRefreshCw className="w-10 h-10 text-primary" />,
    title: "Refonte & modernisation",
    price: "À partir de 900€",
    description:
      "Transformer votre ancien site en plateforme professionnelle et moderne.",
  },
];
