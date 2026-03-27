import { FiLayout } from "react-icons/fi";
import { LuPalette, LuSmartphone, LuWrench } from "react-icons/lu";

export const services = [
  {
    title: "Création de site vitrine",
    description:
      "Site simple et professionnel pour présenter votre activité, vos services et vos coordonnées.",
    icon: <LuPalette className="w-12 h-12 text-primary" />,
  },
  {
    title: "Refonte de site existant",
    description:
      "Modernisation d'un ancien site pour améliorer l'image de votre entreprise.",
    icon: <FiLayout className="w-12 h-12 text-primary" />,
  },
  {
    title: "Site avec prise de contact / réservation",
    description:
      "Intégration de formulaire, bouton d'appel, WhatsApp ou système de réservation selon votre activité.",
    icon: <LuSmartphone className="w-12 h-12 text-primary" />,
  },
  {
    title: "Maintenance et mises à jour",
    description:
      "Petites modifications, mises à jour de contenu et accompagnement après la mise en ligne.",
    icon: <LuWrench className="w-12 h-12 text-primary" />,
  },
];
