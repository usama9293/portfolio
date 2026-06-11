import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin, Copy, Download, Check, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus({ type: "error", text: "Failed to copy email" });
    }
  };

  const emailjsConfigured =
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (emailjsConfigured) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, [emailjsConfigured]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    if (!emailjsConfigured) {
      setStatus({
        type: "error",
        text: "Contact form not configured yet. Please email me directly.",
      });
      setSending(false);
      return;
    }

    try {
      const time = new Date().toLocaleString("en-PK", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: `${form.name} (${form.email})`,
          time,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success", text: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        text: "Failed to send. Please email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk!"
        />

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#111] p-4">
              <Mail className="h-5 w-5 text-cyan-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-300">{personalInfo.email}</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-cyan-400"
                aria-label="Copy email"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#111] p-4">
              <Phone className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-300">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#111] p-4">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-300">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02]"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-gray-300 placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-gray-300 placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-gray-300 placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50"
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500/30 px-6 py-3 font-medium text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10 disabled:opacity-50"
            >
              <Send size={18} />
              {sending ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.text}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
