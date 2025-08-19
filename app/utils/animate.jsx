
export const animateCircleLoop = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false }, 
  transition: {
    delay: 0.5,
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  },
  variants: {
    hidden: { opacity: 0.8, scale: .9 , overflow: "hidden" },
    visible: { opacity: 1, scale: 1.1 , overflow: "hidden" },
  },
}
export const animateImage = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true ,margin: "-50% 0px -50% 0px" }, // Trigger when image is near the viewport
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
  variants: {
    hidden: { opacity: 0, scale: 0.9 , y: -20 },
    visible: { opacity: 1, scale: 1 , y: 0},
  },
}

export const animateHomeBackgroundImage = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
  variants: {
    hidden: { opacity: 0, x: 100, overflow: "hidden" },
    visible: { opacity: 1, x: 0 },
  },
};

export const animateHomeForegroundImage = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
    delay: 1, // Wait for background animation to complete (1s duration)
  },
  variants: {
    hidden: { opacity: 0, y: 20, overflow: "hidden" },
    visible: { opacity: 1, y: 0 },
  },
};

export const animateTextParent = {
  hidden: {},
  whileInView: "visible",
  viewport: { once: true , margin: "-50% 0px -50% 0px" }, // Trigger when text is near the viewport
  visible: {
    transition: {
      delay: 0.9,
      staggerChildren: 0.2, 
      ease: "easeInOut",
    },
  },
};

export const animateTextChild = {
  hidden: { opacity: 0, y: 20 },
  whileInView: "visible",
  viewport: { once: true , margin: "-50% 0px -50% 0px" }, // Trigger when text is near the viewport
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
