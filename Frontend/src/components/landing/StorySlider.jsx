import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stories = [
  {
    title: "A student planning higher studies",
    sub: "Understands eligibility before taking debt",
  },
  {
    title: "A salaried professional buying a home",
    sub: "Checks EMI safety & risk",
  },
  {
    title: "A small business owner",
    sub: "Evaluates loan feasibility without pressure",
  },
];

export default function StorySlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % stories.length),
      3500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white"
    >
      <h3 className="text-xl font-medium">
        {stories[index].title}
      </h3>
      <p className="text-white/60 text-sm mt-1">
        {stories[index].sub}
      </p>
    </motion.div>
  );
}
