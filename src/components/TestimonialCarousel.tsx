import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { css } from "../../styled-system/css";
import LaughingVillagersImage from "../assets/quote-laughing-villagers.jpg";
import BenchLaughingImage from "../assets/quote-bench-laughing.jpg";
import ThreeVillagersImage from "../assets/quote-three-villagers.jpg";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

type Testimonial = {
  quote: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  // Crop focus for phones and for wider screens, where the quote sits on the left
  imagePosition: { base: string; md: string };
  // Percentage of the photo hidden off its right edge on wider screens
  cropRight?: number;
  // Flip the photo on wider screens so its people sit on the right, clear of the quote
  mirror?: boolean;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I was so so impressed with the production quality and depth of the characters in particular - would love to play as someone else to learn more about the world!",
    name: "Patrick",
    description: "software developer from Peckham",
    image: ThreeVillagersImage,
    imageAlt: "Three young players in costume laughing together on a bench in the woods",
    imagePosition: { base: "30% center", md: "center" },
    mirror: true,
  },
  {
    quote:
      "A brilliant concept which involved much thought, hard-work and enthusiasm in bringing this brilliant idea to abundant fruition.",
    name: "Valerie",
    description: "retired secretary from Crowborough",
    image: BenchLaughingImage,
    imageAlt: "Two women in costume laughing together on a bench under the woodland canopy",
    // Lower crop keeps the name signs (reversed by the mirror) off the top of the screen
    imagePosition: { base: "55% center", md: "center 65%" },
    mirror: true,
    cropRight: 33,
  },
  {
    quote:
      "I would absolutely love to do this again. As a complete beginner I found it totally engaging and immersive. Honestly, I think this is a terrific idea - so much thought has gone into making it pretty close to perfect.",
    name: "Janet",
    description: "editor from Groombridge",
    image: LaughingVillagersImage,
    imageAlt: "Villagers in costume laughing together in the woods",
    imagePosition: { base: "55% center", md: "0%" },
    cropRight: 28,
  },
];

const AUTOPLAY_MS = 8000;

const controlButtonStyles = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "2.75rem",
  height: "2.75rem",
  p: 0,
  fontFamily: "inherit",
  fontSize: "1.5rem",
  color: "woodland.straw",
  backgroundColor: "transparent",
  border: "1px solid",
  borderColor: "woodland.straw",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease",
  _hover: {
    backgroundColor: "woodland.straw",
    color: "woodland.nightInk",
  },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "woodland.straw",
    outlineOffset: "3px",
  },
});

export const TestimonialCarousel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isAutoplaying = isInView && !isPaused && !prefersReducedMotion;
  const active = testimonials[activeIndex];

  const showSlide = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  // Advance while the section is on screen, unless the viewer is hovering over the quote or using the controls
  useEffect(() => {
    if (!isAutoplaying) return;
    const timer = window.setTimeout(() => showSlide(activeIndex + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isAutoplaying]);

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="What players say"
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsPaused(false);
      }}
      className={css({
        position: "relative",
        height: "100dvh",
        minHeight: "100dvh",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
        display: "flex",
        alignItems: { base: "flex-start", md: "center" },
        overflow: "hidden",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundColor: "secondary.blackberry",
      })}
    >
      {/* Phones show the photo below the quote; wider screens fill the section with it */}
      <div
        className={css({
          position: "absolute",
          top: { base: "40%", md: 0 },
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        })}
      >
        {testimonials.map((testimonial, index) => (
          <motion.img
            key={testimonial.name}
            src={testimonial.image}
            alt={index === activeIndex ? testimonial.imageAlt : ""}
            aria-hidden={index !== activeIndex}
            loading="lazy"
            initial={false}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: "easeInOut" }}
            style={
              {
                "--position-base": testimonial.imagePosition.base,
                "--position-md": testimonial.imagePosition.md,
                // Widening the image pushes the cropped part past the section's right edge
                "--width-md": `${100 / (1 - (testimonial.cropRight ?? 0) / 100)}%`,
                "--transform-md": testimonial.mirror ? "scaleX(-1)" : "none",
              } as CSSProperties
            }
            className={css({
              position: "absolute",
              top: 0,
              left: 0,
              width: { base: "100%", md: "var(--width-md)" },
              maxWidth: "none",
              height: "100%",
              objectFit: "cover",
              objectPosition: { base: "var(--position-base)", md: "var(--position-md)" },
              transform: { md: "var(--transform-md)" },
            })}
          />
        ))}
        <div
          className={css({
            position: "absolute",
            inset: 0,
            background: {
              base: "linear-gradient(180deg, token(colors.secondary.blackberry) 0%, rgba(61, 35, 56, 0.35) 40%, rgba(61, 35, 56, 0.1) 100%)",
              md: "linear-gradient(90deg, rgba(61, 35, 56, 0.9) 0%, rgba(61, 35, 56, 0.72) 38%, rgba(61, 35, 56, 0) 68%)",
            },
          })}
        />
      </div>

      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={css({
          position: "relative",
          zIndex: 2,
          width: { base: "100%", md: "min(38rem, 45%)" },
          boxSizing: "border-box",
          px: { base: "1.5rem", md: 0 },
          pt: { base: "5.5rem", md: 0 },
          ml: { md: "max(4rem, 7vw)" },
          color: "woodland.straw",
        })}
      >
        <div aria-live={isAutoplaying ? "off" : "polite"}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
              className={css({ margin: 0 })}
            >
              <span
                aria-hidden="true"
                className={css({
                  display: "block",
                  fontSize: { base: "4rem", md: "6rem" },
                  lineHeight: 0.8,
                  color: "woodland.ochre",
                  mb: { base: "0.25rem", md: "0.5rem" },
                })}
              >
                “
              </span>
              <blockquote
                className={css({
                  margin: 0,
                  fontSize: { base: "1.375rem", md: "1.75rem", lg: "2rem" },
                  lineHeight: 1.35,
                })}
              >
                {active.quote}
              </blockquote>
              <figcaption
                className={css({
                  textStyle: "body",
                  fontSize: { base: "1.125rem", md: "1.25rem" },
                  mt: "1.5rem",
                })}
              >
                <span className={css({ color: "woodland.ochre", fontWeight: "bold" })}>
                  {active.name}
                </span>
                , {active.description}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            mt: { base: "1.75rem", md: "2.5rem" },
          })}
        >
          <button
            type="button"
            aria-label="Previous quote"
            onClick={() => showSlide(activeIndex - 1)}
            className={controlButtonStyles}
          >
            ←
          </button>
          <div className={css({ display: "flex", gap: "0.75rem" })}>
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show quote ${index + 1} of ${testimonials.length}`}
                aria-current={index === activeIndex}
                onClick={() => showSlide(index)}
                className={css({
                  width: "0.75rem",
                  height: "0.75rem",
                  p: 0,
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: "woodland.straw",
                  backgroundColor: index === activeIndex ? "woodland.straw" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  _focusVisible: {
                    outline: "2px solid",
                    outlineColor: "woodland.straw",
                    outlineOffset: "3px",
                  },
                })}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next quote"
            onClick={() => showSlide(activeIndex + 1)}
            className={controlButtonStyles}
          >
            →
          </button>
        </div>
      </div>
      <ScrollDownIndicator />
    </section>
  );
};
