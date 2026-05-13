import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { css } from "../../styled-system/css";
import { Card } from "./Card";

const cardTexts = [
  "Build real-time character",
  "Form powerful connections",
  "Grow confidence and independence",
  "Solve mysteries from 1601",
] as const;

export const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentText = cardTexts[currentIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index === cardTexts.length - 1 ? 0 : index + 1));
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      })}
    >
      <div
        className={css({
          position: "relative",
          width: "20rem",
          height: "20rem",
        })}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={css({
              position: "absolute",
              inset: 0,
            })}
          >
            <Card text={currentText} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        })}
        aria-label={`Card ${currentIndex + 1} of ${cardTexts.length}`}
      >
        {cardTexts.map((text, index) => (
          <div
            key={text}
            className={css({
              width: "0.75rem",
              height: "0.75rem",
              borderRadius: "999px",
              backgroundColor: index === currentIndex ? "primary.light" : "background.surface",
              opacity: index === currentIndex ? 1 : 0.5,
            })}
          />
        ))}
      </div>
    </div>
  );
};
