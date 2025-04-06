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
    description: "a fast and convenient pizza ordering service",
    image: "/projects/project4.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Zustand"],
    liveUrl: "https://next-pizza-phi-murex.vercel.app",
    githubUrl: "https://github.com/denys-semanchuk/pizza"
  },
  {
    id: 2,
    title: "TaskMaster ToDo App",
    description: "A modern task management application built with Next.js, Redux, and TypeScript",
    image: "/projects/project1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    liveUrl: "https://to-do-application-next-node.vercel.app/dashboard",
    githubUrl: "https://github.com/denys-semanchuk/ToDo-Application-Next-Node"
  },
  {
    id: 3,
    title: "Currency Converter",
    description: "Fast and reliable currency converter, using real-time exchange rates.",
    image: "/projects/project2.png",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://currency-converter-gamma-hazel.vercel.app/",
    githubUrl: "https://github.com/denys-semanchuk/Currency-Converter"
  },
  {
    id: 4,
    title: "QuickQuill Notes App",
    description: "A modern, feature-rich note-taking application.",
    image: "/projects/project3.png",
    technologies: ["React", "TypeScript", "Redux Toolkit"],
    liveUrl: "https://notes-application-phi-one.vercel.app/",
    githubUrl: "https://github.com/denys-semanchuk/Notes-Application"
  }
];