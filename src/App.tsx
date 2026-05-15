import "./index.css";
import { css } from "../styled-system/css";
import { useRef } from "react";
import { CardGrid } from "./components/CardGrid";
import { ContentSection } from "./components/ContentSection";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { SnapSection } from "./components/SnapSection";
import { BookNow } from "./components/BookNow";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        backgroundColor: "primary.blackberry",
        color: "accent.candlelight",
        height: "100dvh",
        overflowY: "auto",
        overflowX: "hidden",
        overscrollBehaviorY: "contain",
        overscrollBehaviorX: "none",
        scrollSnapType: "y mandatory",
      })}
    >
      <HeroSection />
      <IntroSection />
      <SnapSection showScrollIndicator={false} color="blackberry" containInnerScroll>
        <CardGrid />
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
          })}
        >
          25 places remaining
        </h2>
        <BookNow color="blackberry" />
      </ContentSection>
    </div>
  );
}

export default App;
