import { motion } from "framer-motion";
import { useState } from "react";
import { css } from "../../styled-system/css";
import CrossIcon from "../assets/cross.png";
import { ScallopedCorners } from "./ScallopedCorners";
import { SnapSection } from "./SnapSection";

const readMoreParagraphs = [
  "Hidden within the ancient oak woodland of Langton Green lies a living world of secrets, survival, storytelling and suspicion.",
  "The Forest History Mystery is an immersive week-long adventure where players journey back in time to the year 1601.",
  "During the first two days of the experience, players will take part in woodland workshops, campfire gatherings, games, music and team challenges, as they build their unique characters and learn the skills, values and traditions of the past.",
  "As the week unfolds, the woodland transforms and the players step into a fully interactive woodland mystery becoming part of living communities. The wood will buzz with the crafts and trades of minstrels, herbalists, smugglers, wanderers and secret keepers, each with their own loyalties, hidden motives and dangerous truths.",
  "Participants will trade, negotiate, solve challenges and work together, forming alliances and rivalries as they explore the relationships between people, nature and survival.",
  "But not everyone is who they seem.",
  "Some players are protecting secrets.",
  "Some have dangerous allegiances.",
  "Some may betray to protect themselves.",
  "And somewhere within the forest lies the truth behind a growing mystery...",
  "Trust carefully.",
  "Choose allies wisely.",
  "Tread lightly beneath the trees.",
] as const;

export const IntroSection = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  return (
    <SnapSection color="forestDark">
      <div
        className={css({
          textAlign: "center",
          textStyle: "subheading",
          fontSize: "3rem",
          margin: "2rem",
          color: "accent.candlelight",
        })}
      >
        An experience like no other
      </div>
      <div
        className={css({
          textAlign: "center",
          textStyle: "body",
          fontSize: "1.5rem",
          maxWidth: "48rem",
          mx: "1rem",
          mb: "2rem",
        })}
      >
        The Forest History Mystery is an immersive week-long adventure recommended for young people
        aged 10-15.
      </div>
      <div
        className={css({
          textAlign: "center",
          textStyle: "body",
          fontSize: "1.5rem",
          maxWidth: "48rem",
          mx: "1rem",
        })}
      >
        Journey back in time to the year 1601, but tread carefully; not everyone is who they seem...
      </div>
      <button
        type="button"
        onClick={() => setIsReadMoreOpen(true)}
        className={css({
          mt: "2rem",
          textStyle: "highlight",
          color: "black",
          backgroundColor: "accent.candlelight",
          border: "none",
          cursor: "pointer",
          px: "1.5rem",
          py: "0.75rem",
          borderColor: "black",
          borderRadius: "1px",
          borderStyle: "solid",
        })}
      >
        What's the mystery?
      </button>
      {isReadMoreOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="read-more-title"
          className={css({
            position: "fixed",
            inset: 0,
            zIndex: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.30)",
            p: "1rem",
          })}
          onClick={() => setIsReadMoreOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={css({
              position: "relative",
            })}
          >
            <ScallopedCorners
              className={css({
                width: "min(48rem, calc(100vw - 2rem))",
                maxHeight: "calc(100dvh - 2rem)",
              })}
              contentClassName={css({
                position: "relative",
                color: "primary.oakBarkBrown",
                p: { base: "2rem", md: "3rem" },
                overflowY: "auto",
                maxHeight: "calc(100dvh - 2rem)",
              })}
            >
              <button
                type="button"
                aria-label="Close read more dialog"
                onClick={() => setIsReadMoreOpen(false)}
                className={css({
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  zIndex: 1,
                  width: "1rem",
                  height: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: "none",
                  p: 0,
                })}
              >
                <img
                  src={CrossIcon}
                  alt=""
                  className={css({
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  })}
                />
              </button>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 1,
                    },
                  },
                }}
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                })}
              >
                <h2
                  id="read-more-title"
                  className={css({
                    textStyle: "subheading",
                    margin: 0,
                  })}
                >
                  The Forest History Mystery
                </h2>
                {readMoreParagraphs.map((paragraph) => (
                  <motion.p
                    key={paragraph}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={css({
                      textStyle: "body",
                      margin: 0,
                    })}
                  >
                    {paragraph}
                  </motion.p>
                ))}
                <button
                  type="button"
                  onClick={() => setIsReadMoreOpen(false)}
                  className={css({
                    alignSelf: "flex-start",
                    mt: "1rem",
                    textStyle: "body",
                    color: "secondary.parchmentCream",
                    backgroundColor: "secondary.blackberry",
                    border: "none",
                    cursor: "pointer",
                    px: "1rem",
                    py: "0.5rem",
                  })}
                >
                  Close
                </button>
              </motion.div>
            </ScallopedCorners>
          </div>
        </div>
      )}
    </SnapSection>
  );
};
