import { motion } from "framer-motion";
import { css } from "../../styled-system/css";
import { Card } from "./Card";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

const cardTexts = [
  "Build real-time character",
  "Form powerful connections",
  "Grow confidence and independence",
  "Solve mysteries from 1601",
] as const;

export const CardGrid = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        className={css({
          display: "grid",
          gridTemplateColumns: {
            base: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { base: "2rem", md: "3rem" },
          p: "1rem",
          my: "1rem",
        })}
      >
        {cardTexts.map((text) => (
          <motion.div
            key={text}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card text={text} />
          </motion.div>
        ))}
      </motion.div>

      <div className={css({ h: "5rem", position: "relative" })}>
        <ScrollDownIndicator />
      </div>
    </div>
  );
};
