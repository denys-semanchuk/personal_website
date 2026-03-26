import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundPattern } from "../components/BackgroundPattern";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { Footer } from "../components/Footer";
import { Contact } from "@/components/Contact";
import { Logo } from "../components/Logo";
import { Menu } from "@/components/Menu";
import { projects } from "@/data/projects";
import { FiLayout } from "react-icons/fi";
import {
  LuPalette,
  LuSmartphone,
  LuWrench,
  LuStore,
  LuChefHat,
  LuScissors,
  LuBriefcase,
  LuTrendingUp,
  LuFileText,
  LuGlobe,
  LuRefreshCw,
} from "react-icons/lu";
import { FAQ } from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>Built By Denys</title>
        <meta
          name="description"
          content="Création de sites web modernes pour commerces locaux, indépendants et petites entreprises en France."
        />
      </Head>

      <header className="min-h-screen relative overflow-hidden flex flex-col">
        <AnimatedBackground />
        <nav className="fixed w-full z-50 bg-background">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Logo />
            <Menu />
          </div>
        </nav>

        <motion.section
          id="first-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex items-center justify-center px-4 pt-20 pb-16"
        >
          <div className="text-center max-w-4xl w-full">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Sites web pour commerces et entreprises locales
            </h1>
            <p className="text-text-light mb-8 text-lg max-w-2xl mx-auto">
              J’aide les commerces, indépendants et petites entreprises à avoir
              un site professionnel, simple et efficace.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Discuter de votre projet
            </motion.a>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </header>

      <section
        id="portfolio"
        className="relative py-20 bg-white/80 backdrop-blur-sm w-full"
      >
        <BackgroundPattern className="rotate-3 scale-125 overflow-hidden" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto px-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-light mb-4">{project.description}</p>
                {project.benefits && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-text mb-2">
                      Points forts :
                    </p>
                    <ul className="space-y-1">
                      {project.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="text-sm text-text-light flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.type === "concept" && (
                  <span className="inline-block text-xs px-3 py-1 bg-primary/5 text-primary rounded-full mb-4">
                    Projet conceptuel
                  </span>
                )}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      Démo en direct
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      Voir le code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="a-propos" className="relative py-20 w-full">
        <BackgroundPattern className="-rotate-3 opacity-50 overflow-hidden" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
              <p className="text-gray-600 mb-6">
                Je suis développeur web basé en France. Je crée des sites web
                modernes pour les commerces locaux, indépendants et petites
                entreprises. Mon objectif n’est pas seulement de faire un joli
                site, mais de créer une présence en ligne claire,
                professionnelle et utile pour vos clients.
              </p>
              <div className="flex gap-4">
                {["React", "Next.js", "TypeScript", "Tailwind"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm hover:from-primary/20 hover:to-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-square max-w-[640px] w-full mx-auto rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/profile.jpg"
                alt="Profil"
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative py-20 bg-white/80 backdrop-blur-sm w-full"
      >
        <BackgroundPattern className="rotate-6 scale-150 overflow-hidden" />
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-card-bg backdrop-blur-sm rounded-lg text-center shadow-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-primary/5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="target-audience" className="relative py-20 bg-background">
        <BackgroundPattern className="-rotate-2 opacity-40 overflow-hidden" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Pour qui ?</h2>
            <p className="text-text-light text-lg">
              Je crée des sites web pour les professionnels qui ont besoin
              d&apos;une présence en ligne claire, moderne et professionnelle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Commerces locaux",
                icon: <LuStore className="w-8 h-8 text-primary" />,
                description:
                  "Boutiques, magasins spécialisés et commerces de proximité",
              },
              {
                title: "Restaurants & boulangeries",
                icon: <LuChefHat className="w-8 h-8 text-primary" />,
                description:
                  "Restaurants, boulangeries, fleuristes et métiers du secteur alimentaire",
              },
              {
                title: "Salons de coiffure",
                icon: <LuScissors className="w-8 h-8 text-primary" />,
                description:
                  "Salons de coiffure, barber shops et salons d'esthétique",
              },
              {
                title: "Indépendants",
                icon: <LuBriefcase className="w-8 h-8 text-primary" />,
                description:
                  "Consultants, prestataires de services et travailleurs autonomes",
              },
              {
                title: "Petites entreprises",
                icon: <LuTrendingUp className="w-8 h-8 text-primary" />,
                description: "PME et jeunes entreprises en phase de croissance",
              },
              {
                title: "Professionnels du secteur",
                icon: <LuBriefcase className="w-8 h-8 text-primary" />,
                description:
                  "Agences, artisans, professionnels de santé et autres secteurs B2B",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-md border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    {client.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text">
                    {client.title}
                  </h3>
                </div>
                <p className="text-sm text-text-light">{client.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12 pt-8 border-t border-primary/10"
          >
            <p className="text-text-light italic">
              Vous ne trouvez pas votre secteur ?{" "}
              <span className="text-primary font-semibold">Contactez-moi</span>{" "}
              pour discuter de votre projet.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative py-20 bg-white/80 backdrop-blur-sm w-full"
      >
        <BackgroundPattern className="rotate-3 scale-125 overflow-hidden" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Tarifs simples et transparents
            </h2>
            <p className="text-text-light text-lg">
              Des sites professionnels adaptés à votre budget et vos besoins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="p-8 bg-card-bg backdrop-blur-sm rounded-lg text-center shadow-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-primary/5">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {plan.price}
                </h3>
                <h4 className="text-lg font-semibold mb-4">{plan.title}</h4>
                <p className="text-text-light">{plan.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12 pt-8 border-t border-primary/10"
          >
            <p className="text-text-light">
              Les tarifs incluent la création, l’adaptation mobile et
              l’optimisation.
              <span className="text-primary font-semibold block mt-2">
                Contactez-moi pour un devis personnalisé selon votre projet.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
