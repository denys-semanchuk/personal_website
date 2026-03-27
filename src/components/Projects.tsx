import { projects } from "@/data"
import { motion } from 'framer-motion';
import Image from "next/image";

export const Projects = () => {
    return  (
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
    )
}