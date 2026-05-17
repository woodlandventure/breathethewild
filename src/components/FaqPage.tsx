import { css } from "../../styled-system/css";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "When and where does it take place?",
    a: "The Forest History Mystery will take place 20th-24th and 24th-28th July 2026 in an ancient oak woodland in Langton Green.",
  },
  {
    q: "Who is it for?",
    a: "We recommend this experience for young people aged 10-15, though we will happily accomodate younger or older participants.",
  },
  {
    q: "What should participants bring?",
    a: "We will share a full kit list after booking. Expect weather-appropriate clothing, sturdy footwear, and plenty of curiosity.",
  },
  {
    q: "How do I book?",
    a: (
      <div>
        Book now using{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://buytickets.at/breathethewildtheatrecompany/2215560"
          className={css({
            color: "accent.candlelight",
            textDecoration: "underline",
          })}
        >
          this link.
        </a>
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
