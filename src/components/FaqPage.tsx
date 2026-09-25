import { css } from "../../styled-system/css";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "When and where does it take place?",
    a: "The Forest History Mystery will be taking bookings from March 2027 although we can be flexible provided the weather looks good. They will be running it from Wednesday to Saturday in ancient oak woodland in Langton Green.",
  },
  {
    q: "Who is it for?",
    a: "We recommend this experience for corporate groups or friendship groups of around 10-40 people aged 10 and over. That said, we are nothing if not flexible.",
  },
  {
    q: "What should participants bring?",
    a: "We will share a full kit list after booking. Expect weather-appropriate clothing, sturdy footwear, and plenty of curiosity.",
  },
  {
    q: "How do I book?",
    a: (
      <div>
        Get in touch at <a className={css({
          color: "accent.candlelight",
          textDecoration: "underline",
        })}
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:info@breathethewild.co.uk">info@breathethewild.co.uk</a> to curate your bespoke experience

      </div>
    ),
  },
] as const;

export const FaqPage = () => {
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
      })}
    >
      <article
        className={css({
          maxWidth: "56rem",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
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
          FAQs
        </h1>

        {faqs.map(({ q, a }) => (
          <section
            key={q}
            className={css({ display: "flex", flexDirection: "column", gap: "0.5rem" })}
          >
            <h2
              className={css({
                textStyle: "subheading",
                margin: 0,
                color: "accent.candlelight",
              })}
            >
              {q}
            </h2>
            <p className={paragraphClass}>{a}</p>
          </section>
        ))}
      </article>
    </main>
  );
};

const paragraphClass = css({
  textStyle: "body",
  margin: 0,
});
