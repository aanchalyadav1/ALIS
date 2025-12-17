export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

export const cardHover = {
  whileHover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(0,255,255,0.12)",
    transition: { duration: 0.3 }
  }
};
