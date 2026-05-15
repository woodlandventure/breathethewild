import { motion } from "framer-motion";
import { css } from "../../styled-system/css";

export const ScrollDownIndicator = () => {
  return (
    <div
      aria-hidden="true"
      className={css({
        position: "absolute",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
        left: "50%",
        transform: "translateX(-50%)",
        color: "accent.candlelight",
        textStyle: "highlight",
        textAlign: "center",
        zIndex: 5,
      })}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        })}
      >
        <div>Scroll down</div>
        <div
          className={css({
            width: "0.75rem",
            height: "0.75rem",
            borderRight: "2px solid currentColor",
            borderBottom: "2px solid currentColor",
            transform: "rotate(45deg)",
          })}
        />
      </motion.div>
    </div>
  );
};
