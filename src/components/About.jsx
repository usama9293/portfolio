import { motion } from "framer-motion";
import { Briefcase, CheckCircle, GraduationCap, MapPin } from "lucide-react";
import { aboutBio, stats, personalInfo } from "../data/portfolioData";

const statIcons = {
  briefcase: Briefcase,
  check: CheckCircle,
  graduation: GraduationCap,
  map: MapPin,
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-50 blur" />
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-[#111] md:h-80 md:w-80">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} — Full Stack Developer`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-6xl font-bold gradient-text">UA</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              {aboutBio}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = statIcons[stat.icon];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-xl border border-white/5 bg-[#111] p-4 transition-colors hover:border-cyan-500/30"
                  >
                    <Icon className="mb-2 h-5 w-5 text-cyan-400" />
                    <p className="text-sm font-medium text-gray-300">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
