import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, certifications, volunteering } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Education & Certifications" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-xl border border-white/5 bg-[#111] p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <GraduationCap className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{education.degree}</h3>
              <p className="text-gray-400">{education.institution}</p>
              <p className="mt-1 text-sm text-cyan-400">{education.period}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <Award className="h-5 w-5 text-cyan-400" />
            Certifications
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-lg border border-white/5 bg-[#111] px-4 py-3 text-sm text-gray-300 transition-colors hover:border-cyan-500/30"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">Leadership & Volunteering</h3>
          <div className="space-y-4">
            {volunteering.map((item) => (
              <div
                key={item.org}
                className="rounded-xl border border-white/5 bg-[#111] p-5 transition-colors hover:border-cyan-500/30"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-semibold text-white">
                    {item.role} — {item.org}
                  </h4>
                  <span className="text-sm text-cyan-400">{item.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
