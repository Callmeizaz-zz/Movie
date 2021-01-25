export const AnimatePage = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const TitleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const Fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const PhotoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const ScrollAnim = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
      ease: [0.42, 0, 0.58, 1], //  | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: 0.5,
      ease: [0.42, 0, 0.58, 1], //  | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
    },
  },
};
