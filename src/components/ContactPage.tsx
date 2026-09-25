import { Link } from "@tanstack/react-router";
import { css } from "../../styled-system/css";
import Logo from "../assets/Logo Glow Only.png";

const contactEmail = "info@breathethewild.co.uk";

export const ContactPage = () => {
  return (
    <main
      className={css({
        height: "100dvh",
        width: "100%",
        overflowY: "auto",
        overscrollBehaviorY: "contain",
        overscrollBehaviorX: "none",
        backgroundColor: "primary.deepForestGreen",
        color: "secondary.parchmentCream",
        p: { base: "1.5rem", md: "3rem" },
        pt: { base: "5rem", md: "6rem" },
        textAlign: "center",
      })}
    >
      <article
        className={css({
          maxWidth: "56rem",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <h1
          className={css({
            textStyle: "heading",
            margin: 0,
            color: "accent.candlelight",
            textAlign: "center",
          })}
        >
          Contact
        </h1>
        <p className={paragraphClass}>
          Breathe the Wild was created by Diana Gillinder. She imagined and designed its story and experience, while Dan Gillinder has contributed the practical woodland skills that help bring the vision to life.
        </p>{" "}
        <p className={paragraphClass}>
          Read more about Diana and Dan{" "}
          <Link
            className={css({ color: "accent.candlelight", textDecoration: "underline" })}
            to="/about"
          >
            here
          </Link>
          .
        </p>
        <p className={paragraphClass}>
          Got any questions? Get in touch at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className={css({ color: "accent.candlelight", textDecoration: "underline" })}
          >
            {contactEmail}
          </a>
        </p>
        <img
          src={Logo}
          alt="Breathe The Wild"
          className={css({ width: "15rem", height: "auto" })}
        />
      </article>
    </main>
  );
};

const paragraphClass = css({
  textStyle: "body",
  margin: 0,
});
