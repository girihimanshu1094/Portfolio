import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projects.js";

function Projects() {
  return (
    <section id="projects" className="bg-secondBg">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A few web development projects that show my learning in frontend, backend and database concepts.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex rounded-lg border border-white/10 bg-cardBg p-5 transition hover:-translate-y-1 hover:border-accent/70"
            >
              <div className="flex w-full flex-col">
                <h3 className="text-xl font-semibold text-primaryText">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-mutedText">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-200">Key Features</p>
                  <ul className="mt-3 space-y-2 text-sm text-mutedText">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-6">
                  <a
                    href={project.github}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-primaryText transition hover:border-accent hover:text-accent"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                  >
                    <FaExternalLinkAlt size={13} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
