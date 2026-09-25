import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { css } from "../../styled-system/css";
import TreelineImage from "../assets/image-from-rawpixel-id-6267061-png.png";
import { SnapSection } from "./SnapSection";

type StorySection = {
  title: string;
  paragraphs: string[];
  paths?: { name: string; description: string }[];
};

const storySections: StorySection[] = [
  {
    title: "How it works",
    paragraphs: [
      "You arrive in a beautiful forest glade where the fire circle, the welcoming kettle and a day of promise await.",
      "After a few explanations and expectations (needs must) you are wandering thoughtfully through the woods and choosing a character bag from the trees. The bag contains all you need to take on your new (or really rather old) persona and begin a woodland trade with secrets and suspicions already percolating along with the herbalist’s tea.",
      "It is a game so not every player is who they claim to be. However, the more you and your fellow villagers achieve, the more you’ll be rewarded with clues to identify the wayward amongst you.",
    ],
  },
  {
    title: "Enter the story",
    paragraphs: [
      "In the starving winter of 1438, a raid on Ashbrook’s tithe barn ended in flames and three innocent deaths. From its ashes rose the Hollow Crown, a secret circle promising the protection they had so desperately needed.",
      "It’s now 1601, and that promise has hardened into control; our woodland village lives in its shadow. Slaughtered animals are appearing at the edge of the wood, and the Hollow Crown has begun to look our way.",
      "Take your place in the market, mind what you say and choose carefully whom you trust—the Hollow Crown may already be among you.",
    ],
  },
  {
    title: "More than a game",
    paragraphs: [
      "Stepping into a magically different world gives a great opportunity for reflection, reconnection and resetting; solving the murder is not the only way to success. Here in the Breathe the Wild woods there are five paths.",
    ],
    paths: [
      { name: "Connection", description: "meet, listen and collaborate" },
      { name: "Curiosity", description: "explore, question and notice" },
      { name: "Contribution", description: "leave something of yourself in the village" },
      { name: "Commerce", description: "trade, negotiate and discover your value" },
      { name: "Contemplation", description: "notice what the experience reveals about you" },
    ],
  },
  {
    title: "Shaped around you",
    paragraphs: [
      "For workplace teams, school staff and friends marking an occasion, we tailor the experience to the people who come.",
    ],
  },
];

const bodyTextStyles = css({
  textStyle: "body",
  fontSize: { base: "1.125rem", md: "1.25rem" },
  margin: 0,
});

const StoryToggle = ({
  section,
  isOpen,
  onToggle,
}: {
  section: StorySection;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const panelId = useId();

  return (
    <div
      className={css({
        borderTop: "1px solid",
        borderColor: "woodland.lichen",
      })}
    >
      <h3 className={css({ margin: 0 })}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={css({
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            py: "1.25rem",
            px: 0,
            fontFamily: "inherit",
            textStyle: "subheading",
            fontSize: { base: "1.375rem", md: "1.75rem" },
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textAlign: "left",
            color: "woodland.straw",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            _focusVisible: {
              outline: "2px solid",
              outlineColor: "woodland.straw",
              outlineOffset: "4px",
            },
          })}
        >
          {section.title}
          <span
            aria-hidden="true"
            className={css({
              position: "relative",
              width: "1.25rem",
              height: "1.25rem",
              flexShrink: 0,
            })}
          >
            <span
              className={css({
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: "2px",
                mt: "-1px",
                backgroundColor: "currentColor",
              })}
            />
            {/* Vertical bar turns flat when open, so the plus becomes a minus */}
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={css({
                position: "absolute",
                left: "50%",
                top: 0,
                width: "2px",
                height: "100%",
                ml: "-1px",
                backgroundColor: "currentColor",
              })}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={css({ overflow: "hidden" })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                pb: "1.5rem",
              })}
            >
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={bodyTextStyles}>
                  {paragraph}
                </p>
              ))}
              {section.paths && (
                <ul
                  className={css({
                    listStyle: "none",
                    margin: 0,
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  })}
                >
                  {section.paths.map((path) => (
                    <li key={path.name} className={bodyTextStyles}>
                      <strong className={css({ color: "woodland.ochre" })}>{path.name}</strong> –{" "}
                      {path.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const IntroSection = () => {
  // Only one section is open at a time; opening another collapses the rest
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <SnapSection color="pineShadow" scrollIndicatorTone="light">
      {/* Phones only: black treeline silhouette turned white by the filter, pinned to the bottom of the section */}
      <img
        src={TreelineImage}
        alt=""
        aria-hidden="true"
        className={css({
          display: { base: "block", md: "none" },
          position: "absolute",
          left: "50%",
          bottom: 0,
          // Pushed down 10% of its height so the solid strip of ground below the trees is cut off
          transform: "translate(-50%, 10%)",
          width: "100%",
          // Keeps the trees tall enough to see on phones
          minWidth: "50rem",
          height: "auto",
          filter: "brightness(0) invert(1)",
          opacity: 0.2,
          pointerEvents: "none",
          zIndex: 0,
        })}
      />
      <div
        className={css({
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "48rem",
          boxSizing: "border-box",
          px: "1.5rem",
          pt: { base: "6rem", md: "5rem" },
          // On phones the visible trees are 11.8rem tall, so leave that much room below the text
          pb: { base: "11.8rem", md: "8rem" },
          color: "woodland.straw",
        })}
      >
        <h2
          className={css({
            textAlign: "center",
            textStyle: "subheading",
            fontSize: { base: "2.25rem", md: "3rem" },
            margin: 0,
            mb: "2.5rem",
          })}
        >
          An experience like no other
        </h2>
        <div
          className={css({
            borderBottom: "1px solid",
            borderColor: "woodland.lichen",
          })}
        >
          {storySections.map((section) => (
            <StoryToggle
              key={section.title}
              section={section}
              isOpen={openTitle === section.title}
              onToggle={() =>
                setOpenTitle((current) => (current === section.title ? null : section.title))
              }
            />
          ))}
        </div>
      </div>
    </SnapSection>
  );
};
