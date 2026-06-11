import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent md:left-1/2 md:-translate-x-px" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-500 bg-[#0a0a0a] md:left-1/2">
                <Briefcase className="h-4 w-4 text-cyan-400" />
              </div>

              <div
                className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="rounded-xl border border-white/5 bg-[#111] p-6 transition-all hover:border-cyan-500/30">
                  <span className="mb-1 inline-block text-sm font-medium text-cyan-400">
                    {job.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{job.role}</h3>
                  <p className="mb-4 text-gray-400">{job.company}</p>
                  <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                    {job.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
