import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-24">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-semibold">
            How ALIS Works
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            ALIS is not a bank. It’s an AI-powered loan intelligence system
            designed to guide you before you apply.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["Understand", "Listens to your intent, income & context"],
            ["Verify", "Checks PAN, income & documents"],
            ["Underwrite", "AI-driven eligibility & risk logic"],
            ["Guide", "Sanction-style clarity without pressure"],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <h3 className="font-medium text-lg mb-2">{title}</h3>
              <p className="text-sm text-white/60">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* VISIONCODERS */}
        <div className="text-center pt-12 border-t border-white/10">
          <p className="text-xs tracking-widest text-cyan-400 uppercase">
            Built by VisionCoders
          </p>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            VisionCoders is a student-led innovation team focused on
            ethical AI, accessibility, and India-first systems.
            ALIS is built for trust, not conversion pressure.
          </p>
        </div>
      </div>
    </div>
  );
}
