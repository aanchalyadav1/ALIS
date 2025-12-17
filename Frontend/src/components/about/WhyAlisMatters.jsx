import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { sectionFade, cardFade } from "../../animationVariants";

const points = [
  "Explainable decisions — no black-box loan approvals",
  "Built for Indian lending systems and workflows",
  "Agent-based intelligence instead of static rules",
  "ML-assisted eligibility & readiness insights",
  "Designed for trust, transparency, and scale"
];

export default function WhyAlisMatters() {
  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
    >
      <h2 className="text-4xl font-semibold text-center">
        Why <span className="text-cyan-400">ALIS</span> Matters
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {points.map((text, i) => (
          <motion.div
            key={i}
            variants={cardFade}
            className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center"
          >
            <BsStars className="mx-auto text-cyan-400 text-2xl mb-3" />
            <p className="text-white/80 text-sm leading-relaxed">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
