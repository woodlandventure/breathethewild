import { useRef } from "react";
import { motion } from "framer-motion";
import { css } from "../../styled-system/css";
import BackgroundImage from "../assets/hero-market-table.jpg";
import FacebookImage from "../assets/Facebook.png";
import InstagramImage from "../assets/Instagram.png";
import LogoImage from "../assets/LogoGlowNoTheater.png";

const socialLinkStyles = css({
  display: "inline-flex",
  transition: "transform 0.2s ease",
  _hover: {
    transform: "translateY(-2px)",
  },
});

const socialIconStyles = css({
  width: "2.5rem",
  height: "auto",
});

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      className={css({
        minHeight: "100dvh",
        height: "100dvh",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundColor: "woodland.nightInk",
      })}
    >
      <div
        className={css({
          position: "absolute",
          top: "max(1.5rem, env(safe-area-inset-top))",
          left: "max(1.5rem, env(safe-area-inset-left))",
          zIndex: 3,
        })}
      >
        <img
          className={css({ width: { base: "6rem", md: "10rem" }, height: "auto" })}
          src={LogoImage}
          alt="Breathe The Wild"
        />
      </div>
      <img
        src={BackgroundImage}
        alt="Players in costume laughing together on a bench in the woods"
        className={css({
          position: "absolute",
          // Phones: the image is 140% of the screen height and pulled up, so the faces sit between the logo and the title.
          // Wider screens: the box extends past the top and left edges, cropping roughly 20% off the top and shifting the photo well to the left
          top: { base: "-40%", md: "-25%" },
          left: { base: 0, md: "-31.11%" },
          width: { base: "100%", md: "131.11%" },
          maxWidth: "none",
          height: { base: "140%", md: "125%" },
          objectFit: "cover",
          // Phones centre the crop on the two laughing women. Wider screens mirror the photo so they sit in the left half, clear of the text;
          // "right" before mirroring anchors the visible left edge, so narrower split screens crop from the right
          objectPosition: { base: "65% center", md: "85% top" },
          transform: { md: "scaleX(-1)" },
          zIndex: 0,
        })}
      />
      <div
        className={css({
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(10, 10, 8, 0.3) 0%, rgba(10, 10, 8, 0.4) 45%, rgba(37, 53, 42, 0.4) 100%)",
        })}
      />
      <div
        className={css({
          display: { base: "none", md: "block" },
          width: { md: "50%" },
        })}
      />
      <div
        className={css({
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { base: "100%", md: "50%" },
          boxSizing: "border-box",
          px: "1.5rem",
          color: "woodland.straw",
          textAlign: "center",
          textShadow: "0 2px 12px rgba(10, 10, 8, 0.6)",
        })}
      >
        <h1
          className={css({
            textStyle: "heading",
            color: "woodland.straw",
            margin: 0,
            mb: "1.5rem",
          })}
        >
          The Forest History Mystery
        </h1>

        <p
          className={css({
            textStyle: "subheading",
            color: "woodland.straw",
            margin: 0,
            mb: "2rem",
          })}
        >
          An Immersive Adventure
        </p>

        <p
          className={css({
            textStyle: "highlight",
            color: "woodland.straw",
            margin: 0,
            mb: "0.75rem",
            maxWidth: "36rem",
          })}
        >
          Reflect. Reconnect. Reset. We bring colleagues and friends together for unique personalised
        </p>

        <motion.button
          type="button"
          onClick={scrollToNextSection}
          whileHover={{ translateY: "-2px" }}
          className={css({
            textStyle: "highlight",
            fontFamily: "inherit",
            color: "woodland.nightInk",
            backgroundColor: "woodland.straw",
            border: "2px solid",
            borderColor: "woodland.straw",
            textShadow: "none",
            px: "1.75rem",
            py: "0.875rem",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
            _hover: {
              backgroundColor: "woodland.linen",
            },
            _focusVisible: {
              outline: "3px solid",
              outlineColor: "woodland.straw",
              outlineOffset: "3px",
            },
          })}
        >
          Explore the mystery ↓
        </motion.button>

        <div
          className={css({
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            mt: "2.5rem",
          })}
        >
          <a
            href="https://www.facebook.com/breathethewilduk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className={socialLinkStyles}
          >
            <img src={FacebookImage} alt="" className={socialIconStyles} />
          </a>
          <a
            href="https://www.instagram.com/breathe_the_wild_theatre/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className={socialLinkStyles}
          >
            <img src={InstagramImage} alt="" className={socialIconStyles} />
          </a>
        </div>
      </div>
    </section>
  );
};
