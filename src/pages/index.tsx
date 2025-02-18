import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BackgroundPattern } from '../components/BackgroundPattern';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Footer } from '../components/Footer';
import { Contact } from '@/components/Contact';
import { Logo } from '../components/Logo';
import { Menu } from '@/components/Menu';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Build By Denys</title>
        <meta name="description" content="Portfolio showcasing creative work" />
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
          id='first-section'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex items-center justify-center px-4 pt-20 pb-16"
        >
          <div className="text-center max-w-4xl w-full">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Welcome to my creative space
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Crafting Stunning Digital Experiences
            </h1>
            <p className="text-text-light mb-8 text-lg max-w-2xl mx-auto">
              Transforming ideas into beautiful, functional websites
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Explore My Work
            </motion.button>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </header>

      <section id="portfolio" className="relative py-20 bg-white/80 backdrop-blur-sm w-full">
        <BackgroundPattern className="rotate-3 scale-125 overflow-hidden" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="relative py-20 w-full">
        <BackgroundPattern className="-rotate-3 opacity-50 overflow-hidden" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                I&apos;m a passionate web developer focused on creating beautiful and functional websites.
                With expertise in modern web technologies, I bring ideas to life through clean code
                and intuitive design.
              </p>
              <div className="flex gap-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((skill) => (
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
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-20 bg-white/80 backdrop-blur-sm w-full">
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
                title: 'Web Development',
                description: 'Custom websites built with modern technologies',
                icon: '💻'
              },
              {
                title: 'UI/UX Design',
                description: 'Intuitive and beautiful user interfaces',
                icon: '🎨'
              },
              {
                title: 'Optimization',
                description: 'Performance and SEO optimization',
                icon: '⚡'
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card-bg backdrop-blur-sm rounded-lg text-center shadow-lg border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  )
}