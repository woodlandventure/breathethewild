import "./index.css";
import { css } from "../styled-system/css";
import { useLayoutEffect, useRef } from "react";
import { CardCarousel } from "./components/CardCarousel";
import { ContentSection } from "./components/ContentSection";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { SnapSection } from "./components/SnapSection";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // scrollContainerRef.current?.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={css({
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "forest.deep",
        color: "primary.light",
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
      })}
    >
      <HeroSection />
      <IntroSection />
      <SnapSection>
        <CardCarousel />
      </SnapSection>
      <ContentSection title="Launching Summer 2026" gap="1.5rem">
        <p
          className={css({
            textStyle: "highlight",
            margin: 0,
          })}
        >
          20th to 24th July | 10am - 4pm
        </p>
        <h2
          className={css({
            textStyle: "subheading",
            margin: 0,
            color: "background.surface",
          })}
        >
          25 places remaining
        </h2>
        <a
          href="mailto:diana@breathethewild.co.uk"
          className={css({
            alignSelf: "center",
            textStyle: "highlight",
            shadow: "md",
            color: "background.dark",
            borderRadius: "1rem",
            backgroundColor: "primary.main",
            textDecoration: "none",
            px: "1.5rem",
            py: "0.75rem",
          })}
        >
          Book your place
        </a>
      </ContentSection>
    </div>
  );
}

export default App;
