import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { sectionFade, cardFade } from "../../animationVariants";

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

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Explainable by Design",
            desc: "ALIS does not hide decisions behind black-box models. Every eligibility result is backed by transparent reasoning.",
          },
          {
            title: "ML-backed Intelligence",
            desc: "Eligibility, affordability, and risk are predicted using machine learning models trained on realistic financial patterns.",
          },
          {
            title: "Built for Real Lending",
            desc: "ALIS aligns with Indian lending rules, documentation flows, and real approval workflows — not toy examples.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={cardFade}
            className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-6 text-center space-y-4"
          >
            <BsStars className="mx-auto text-cyan-400 text-2xl" />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-white/70 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
