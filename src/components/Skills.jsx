import { motion } from "framer-motion";
import {
  SiDotnet,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiJira,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { Database, Cloud, Monitor } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolioData";

const iconMap = {
  dotnet: SiDotnet,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  express: SiExpress,
  csharp: TbBrandCSharp,
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  sqlserver: Database,
  mysql: SiMysql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  docker: SiDocker,
  azure: Cloud,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  jira: SiJira,
  vscode: TbBrandVscode,
  visualstudio: Monitor,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & Technologies" subtitle="Tools and technologies I work with daily" />

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-cyan-400">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill, i) => {
                  const Icon = iconMap[skill.icon] || SiReact;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group flex items-center gap-3 rounded-xl border border-white/5 bg-[#111] p-4 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5"
                    >
                      <Icon className="h-6 w-6 text-gray-400 transition-colors group-hover:text-cyan-400" />
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
