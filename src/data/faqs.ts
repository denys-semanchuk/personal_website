export interface IFAQItem {
  question: string;
  answer: string;
}

export const faqData: IFAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "I specialize in web development, UI/UX design, and performance optimization. This includes custom website development, responsive design, and SEO optimization."
  },
  {
    question: "What technologies do you use?",
    answer: "I primarily work with modern web technologies including React, Next.js, TypeScript, and Tailwind CSS. I also have experience with various backend technologies and databases."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months or more."
  },
  {
    question: "Do you offer maintenance services?",
    answer: "Yes, I offer ongoing maintenance and support services to ensure your website remains up-to-date and performs optimally."
  },
  {
    question: "How do you handle project communication?",
    answer: "I maintain regular communication through email, scheduled video calls, and project management tools to ensure transparency and timely updates."
  }
];