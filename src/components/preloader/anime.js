export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 2.8 },   //1.3 and delay:2.9
  },
};
