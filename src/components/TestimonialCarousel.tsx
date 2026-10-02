import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { css } from "../../styled-system/css";
import AmandaImage from "../assets/quote-amanda.jpg";
import CharlieImage from "../assets/quote-charlie.jpg";
import ChestImage from "../assets/quote-chest.jpg";
import ElizaImage from "../assets/quote-eliza.jpg";
import HarrietImage from "../assets/quote-harriet.jpg";
import JamesImage from "../assets/quote-james.jpg";
import JoImage from "../assets/quote-jo.jpg";
import MelImage from "../assets/quote-mel.jpg";
import PoppyImage from "../assets/quote-poppy.jpg";
import SamImage from "../assets/quote-sam.jpg";
import BenchLaughingImage from "../assets/quote-bench-laughing.jpg";
import LaughingVillagersImage from "../assets/quote-laughing-villagers.jpg";
import ThreeVillagersImage from "../assets/quote-three-villagers.jpg";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

type Testimonial = {
  quote: string;
  name: string;
  description: string;
  location?: string;
  // Testimonials without their own photo fall back to the generic one
  image?: string;
  imageAlt?: string;
  // Crop focus for phones and for wider screens, where the quote sits on the left
  imagePosition?: { base: string; md: string };
  // Percentage of the photo hidden off its right edge on wider screens
  cropRight?: number;
  // Flip the photo on wider screens so its people sit on the right, clear of the quote
  mirror?: boolean;
};

const genericPhoto = {
  image: ChestImage,
  imageAlt: "An open wooden chest of costumes on a fallen log in the woods",
  imagePosition: { base: "40% center", md: "center" },
  mirror: true,
  cropRight: 25,
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The woods is stunning. It's just an amazing set up. The woods is our wisdom and being guided by you in your story and direction and belief and trust - it was stunning.",
    name: "Amanda",
    description: "Business Founder",
    location: "Kent",
    image: AmandaImage,
    imageAlt: "A villager in costume pouring tea in the woods",
    imagePosition: { base: "50% center", md: "center" },
    cropRight: 30,
  },
  {
    quote:
      "A unique team building & bonding experience taking you back in time, immersing you in nature and absorbing you in mystery & intrigue. A reset for the mind & soul.",
    name: "Jo",
    description: "FE Teacher",
    image: JoImage,
    imageAlt: "Villagers in costume gathered together in a woodland clearing",
    imagePosition: { base: "18% center", md: "center" },
    mirror: true,
  },
  {
    quote:
      "A delightful and unique experience in which I was able to transport myself to another lifetime. I loved the interaction between the other members taking part. If you need to relax and be stress-free I can highly recommend the experience.",
    name: "Valerie",
    description: "Retired PA",
    location: "East Sussex",
    image: BenchLaughingImage,
    imageAlt: "Two women in costume laughing together on a bench under the woodland canopy",
    // Lower crop keeps the name signs (reversed by the mirror) off the top of the screen
    imagePosition: { base: "55% center", md: "center 65%" },
    mirror: true,
    cropRight: 33,
  },
  {
    quote:
      "I was so so impressed with the production quality and depth of the characters in particular - would love to play as someone else to learn more about the world!",
    name: "Patrick",
    description: "Software Developer",
    location: "London",
    image: ThreeVillagersImage,
    imageAlt: "Three young players in costume laughing together on a bench in the woods",
    imagePosition: { base: "30% center", md: "center" },
    mirror: true,
  },
  {
    quote:
      "The amount of thought, time and intricacy that had gone into bringing this idea to life were evident, and made the experience completely immersive.",
    name: "James",
    description: "Urban Planner",
    location: "London",
    image: JamesImage,
    imageAlt: "A player crouching to inspect a red jar in the woods",
    imagePosition: { base: "62% center", md: "center" },
    cropRight: 25,
  },
  {
    quote: "A wonderful day, making friends, unravelling a mystery within a beautiful setting.",
    name: "Mel",
    description: "Company Director",
    location: "East Sussex",
    image: MelImage,
    imageAlt: "A villager in a red headscarf chatting with another player in the woods",
    imagePosition: { base: "30% center", md: "center" },
    mirror: true,
  },
  {
    quote:
      "I would absolutely love to do this again. As a complete beginner I found it totally engaging and immersive. Honestly, I think this is a terrific idea - so much thought has gone into making it pretty close to perfect.",
    name: "Janet",
    description: "Writer",
    location: "East Sussex",
    image: LaughingVillagersImage,
    imageAlt: "Villagers in costume smiling together beneath a canopy in the woods",
    imagePosition: { base: "45% center", md: "center" },
    cropRight: 30,
  },
  {
    quote:
      "Breathe the Wild was an amazing immersion back in time, and completely transported us away from everyday life. There was something for everybody, from trying new crafts in the village to defending murder theories in the group meetings. Di guided the session wonderfully, and gave us space to reflect on how we can bring our character's qualities back to real life. It was a lot of fun from start to finish, I'd highly recommend!!",
    name: "Harriet",
    description: "Data Scientist",
    location: "Berlin",
    image: HarrietImage,
    imageAlt: "A young woman in costume laughing with another player in the woods",
    imagePosition: { base: "55% center", md: "center" },
    cropRight: 30,
  },
  {
    quote: "Sumptuous detail, and unparalleled immersion. A real treat.",
    name: "Oliver",
    description: "Author",
    location: "East Sussex",
  },
  {
    quote:
      "A great way to switch off from reality - a couple of hours break resets the mind. Highly recommend.",
    name: "Sam",
    description: "Postmaster",
    location: "Crowborough",
    image: SamImage,
    imageAlt: "A villager in a yellow apron smiling at the cooking table",
    imagePosition: { base: "70% center", md: "center" },
  },
  {
    quote: "Breathe the Wild enabled me to tap into a creative side I didn't know I had.",
    name: "Helen",
    description: "Clerk to the Parish Council",
    location: "Kent",
    image: JoImage,
    imageAlt: "Villagers in costume gathered together in a woodland clearing",
    imagePosition: { base: "18% center", md: "center" },
    mirror: true,
  },
  {
    quote: "Unique experience, amazing to step back in time for a few hours!",
    name: "Poppy",
    description: "Fashion Communication Student",
    location: "East Sussex",
    image: PoppyImage,
    imageAlt: "Young villagers in costume laughing as one plays a wooden pipe",
    imagePosition: { base: "45% center", md: "center" },
    cropRight: 25,
  },
  {
    quote: "It didn't feel like we were in the game, it felt like we were actually in 1601.",
    name: "Harry",
    description: "Student",
    location: "East Sussex",
  },
  {
    quote:
      "Having a craft means that you always have something to do to occupy yourself and lots of people to talk to.",
    name: "Eliza",
    description: "Civil Servant",
    location: "London",
    image: ElizaImage,
    imageAlt: "Two women in costume laughing together at a craft table",
    // Mirrored so Eliza, the younger woman, sits clear of the quote
    imagePosition: { base: "30% center", md: "center" },
    mirror: true,
  },
  {
    quote:
      "We had lots of fun interspersed with moments of secret subterfuge with most of us trying to discover the identity of the murderer. It was a very enjoyable time well spent.",
    name: "John",
    description: "Retired Police Officer",
  },
  {
    quote: "Immersive, Liberating, Refreshing.",
    name: "Charlie",
    description: "Website guru and supreme techy",
    location: "London",
    image: CharlieImage,
    imageAlt: "A smiling player in a jewelled velvet hat beneath the woodland canopy",
    imagePosition: { base: "55% center", md: "center 15%" },
    cropRight: 12,
  },
];

const wordCount = (text: string) => text.split(/\s+/).length;

// Quotes longer than this get a smaller type size so they still fit above the photo on phones
const LONG_QUOTE_WORDS = 45;

const AUTOPLAY_MS = 8000;

// The dots show a sliding window of this many quotes, centred on the active one
const VISIBLE_DOTS = 3;
const DOT_SIZE_REM = 0.75;
const DOT_GAP_REM = 0.75;
// Room around the window so the dots' focus outlines aren't clipped
const DOT_WINDOW_PADDING_REM = 0.375;
// Long quotes stay up for roughly as long as they take to read
const AUTOPLAY_MS_PER_WORD = 300;

const quoteStyles = css({
  margin: 0,
  fontSize: { base: "1.375rem", md: "1.75rem", lg: "2rem" },
  lineHeight: 1.35,
});

const longQuoteStyles = css({
  margin: 0,
  fontSize: { base: "1.125rem", md: "1.375rem", lg: "1.5rem" },
  lineHeight: 1.35,
});

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
  const firstVisibleDot = Math.min(
    Math.max(activeIndex - Math.floor(VISIBLE_DOTS / 2), 0),
    testimonials.length - VISIBLE_DOTS,
  );

  const showSlide = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  // Advance while the section is on screen, unless the viewer is hovering over the quote or using the controls
  useEffect(() => {
    if (!isAutoplaying) return;
    const delay = Math.max(AUTOPLAY_MS, wordCount(active.quote) * AUTOPLAY_MS_PER_WORD);
    const timer = window.setTimeout(() => showSlide(activeIndex + 1), delay);
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
        {testimonials.map((t, index) => {
          // The generic photo's crop settings only apply when it stands in for a missing photo
          const testimonial = t.image ? t : { ...t, ...genericPhoto };
          return (
            <motion.img
              key={testimonial.name}
              src={testimonial.image}
              alt={index === activeIndex ? testimonial.imageAlt : ""}
              aria-hidden={index !== activeIndex}
              loading="lazy"
              initial={false}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.2,
                ease: "easeInOut",
              }}
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
                objectPosition: {
                  base: "var(--position-base)",
                  md: "var(--position-md)",
                },
                transform: { md: "var(--transform-md)" },
              })}
            />
          );
        })}
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
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                ease: "easeOut",
              }}
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
                className={
                  wordCount(active.quote) > LONG_QUOTE_WORDS ? longQuoteStyles : quoteStyles
                }
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
                <span
                  className={css({
                    color: "woodland.ochre",
                    fontWeight: "bold",
                  })}
                >
                  {active.name}
                </span>
                , {active.description}
                {active.location && ` from ${active.location}`}
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
          <div
            style={{
              width: `${VISIBLE_DOTS * DOT_SIZE_REM + (VISIBLE_DOTS - 1) * DOT_GAP_REM + 2 * DOT_WINDOW_PADDING_REM}rem`,
              padding: `${DOT_WINDOW_PADDING_REM}rem`,
            }}
            className={css({ boxSizing: "border-box", overflow: "hidden" })}
          >
            <motion.div
              initial={false}
              animate={{ x: `${-firstVisibleDot * (DOT_SIZE_REM + DOT_GAP_REM)}rem` }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeInOut" }}
              style={{ gap: `${DOT_GAP_REM}rem` }}
              className={css({ display: "flex" })}
            >
              {testimonials.map((testimonial, index) => {
                const isVisible =
                  index >= firstVisibleDot && index < firstVisibleDot + VISIBLE_DOTS;
                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show quote ${index + 1} of ${testimonials.length}`}
                    aria-current={index === activeIndex}
                    aria-hidden={!isVisible}
                    tabIndex={isVisible ? undefined : -1}
                    onClick={() => showSlide(index)}
                    className={css({
                      flexShrink: 0,
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
                );
              })}
            </motion.div>
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
