import { css } from "../../styled-system/css";
import BackgroundImage from "../assets/breathe-background.jpg";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const HeroSection = () => {
  return (
    <section
      className={css({
        minHeight: "100vh",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      })}
    >
      <div
        className={css({
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          zIndex: 3,
          color: "primary.light",
          textStyle: "brand",
        })}
      >
        Breathe The Wild
      </div>
      <img
        src={BackgroundImage}
        alt="Background"
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        })}
      />
      <div
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
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
          height: "100%",
          color: "primary.light",
          textAlign: "center",
          mx: "1rem",
        })}
      >
        <div
          className={css({
            textStyle: "heading",
            mb: "1rem",
          })}
        >
          The Forest History Mystery
        </div>
      </div>
      <ScrollDownIndicator />
    </section>
  );
};
