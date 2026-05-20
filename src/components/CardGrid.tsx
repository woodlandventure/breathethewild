import { motion } from "framer-motion";
import { css } from "../../styled-system/css";
import { Card } from "./Card";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

const cardTexts = [
  "Immerse yourself in the forest",
  "Learn 17th century survival skills",
  "Work with like-minded peasants",
  "Develop a unique Elizabethan character",
  "Unpick a medieval mystery",
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
          my: "2rem",
        })}
      >
        {cardTexts.map((text, index) => (
          <motion.div
            key={text}
            className={css({
              ...(index === cardTexts.length - 1
                ? {
                    gridColumn: { md: "1 / -1" },
                    justifySelf: "center",
                  }
                : {}),
            })}
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

      <div className={css({ h: "10rem", position: "relative" })}>
        <ScrollDownIndicator />
      </div>
    </div>
  );
};
