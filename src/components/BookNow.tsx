import { css } from "../../styled-system/css";
import { motion } from "framer-motion";

export const BookNow = ({ color = "blackberry" }: { color: "blackberry" | "light" }) => {
  return (
    <motion.a
      href="https://buytickets.at/breathethewildtheatrecompany/2215560"
      className={css({
        alignSelf: "center",
        textStyle: "highlight",
        color: color === "blackberry" ? "secondary.parchmentCream" : "black",
        backgroundColor: color === "blackberry" ? "secondary.blackberry" : "accent.candlelight",
        textDecoration: "none",
        px: "1.5rem",
        py: "0.75rem",
      })}
      whileHover={{
        translateY: "-2px",
      }}
    >
      Book now →
    </motion.a>
  );
};
