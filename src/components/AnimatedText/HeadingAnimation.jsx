import { motion } from "framer-motion";
// import styles from "@/Common/AnimatedText/headingAnimation.module.css"
const AnimatedTextWord = ({ text, fontSize, justifyContent , className}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        // type: "spring",
        delay: 0.2,
        damping: 12,
        stiffness: 50,
        duration: "1",
      },
    },
    hidden: {
      x: 0,
      y: 200,
      transition: {
        damping: 12,
        stiffness: 50,
        duration: "1",
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: fontSize,
        justifyContent: justifyContent,
       
      }}
      className={className}
      variants={container}
    >
      <motion.span variants={child}>{text}</motion.span>
    </motion.div>
  );
};

export default AnimatedTextWord;
