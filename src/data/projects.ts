export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next Pizza",
    description: "un service de commande de pizzas rapide et pratique",
    image: "/projects/project4.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Zustand"],
    liveUrl: "https://next-pizza-phi-murex.vercel.app",
    githubUrl: "https://github.com/denys-semanchuk/pizza"
  },
  {
    id: 2,
    title: "Application de gestion de tâches TaskMaster",
    description: "Une application moderne de gestion de tâches développée avec Next.js, Redux et TypeScript",
    image: "/projects/project1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    liveUrl: "https://to-do-application-next-node.vercel.app/dashboard",
    githubUrl: "https://github.com/denys-semanchuk/ToDo-Application-Next-Node"
  },
  {
    id: 3,
    title: "Convertisseur de devises",
    description: "Un convertisseur de devises rapide et fiable, utilisant des taux de change en temps réel.",
    image: "/projects/project2.png",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://currency-converter-gamma-hazel.vercel.app/",
    githubUrl: "https://github.com/denys-semanchuk/Currency-Converter"
  },
  {
    id: 4,
    title: "Application de notes QuickQuill",
    description: "Une application de prise de notes moderne et riche en fonctionnalités.",
    image: "/projects/project3.png",
    technologies: ["React", "TypeScript", "Redux Toolkit"],
    liveUrl: "https://notes-application-phi-one.vercel.app/",
    githubUrl: "https://github.com/denys-semanchuk/Notes-Application"
  }
];