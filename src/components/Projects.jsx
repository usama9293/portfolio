import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Lock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, projectFilters } from "../data/portfolioData";

const filterMap = {
  All: () => true,
  ".NET": (p) => p.category === "dotnet",
  PHP: (p) => p.category === "php",
  React: (p) => p.category === "react",
  "Node.js": (p) => p.category === "node",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(filterMap[activeFilter] || filterMap.All);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="A selection of my professional and personal work" />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "border border-white/10 text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-xl border border-white/5 bg-[#111] p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="mb-3 flex items-start justify-between">
                <span className="text-3xl" role="img" aria-label={project.title}>
                  {project.emoji}
                </span>
                {project.professional && (
                  <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                    <Lock size={12} />
                    Professional
                  </span>
                )}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2 py-1 text-xs text-cyan-400/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-white/5 px-4 py-2 text-sm text-gray-500">
                    <Lock size={14} />
                    Private Repo
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
