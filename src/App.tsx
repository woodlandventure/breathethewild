import "./index.css";
import { css } from "../styled-system/css";
import { useEffect, useRef } from "react";
import { useNavHomeFinalSection } from "./context/NavHomeFinalSectionContext";
import { CardGrid } from "./components/CardGrid";
import { ContentSection } from "./components/ContentSection";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { SnapSection } from "./components/SnapSection";
import { BookNow } from "./components/BookNow";
import { Link } from "@tanstack/react-router";
import { DianaImage, DanImage } from "./components/AboutPage";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const finalSectionRef = useRef<HTMLDivElement>(null);
  const { setHomeFinalInView } = useNavHomeFinalSection();

  useEffect(() => {
    const root = scrollContainerRef.current;
    const target = finalSectionRef.current;
    if (!root || !target) return;

    const handle = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;
      setHomeFinalInView(entry.isIntersecting && entry.intersectionRatio >= 0.2);
    };

    const observer = new IntersectionObserver(handle, {
      root,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.75, 1],
    });
    observer.observe(target);
    return () => {
      observer.disconnect();
      setHomeFinalInView(false);
    };
  }, [setHomeFinalInView]);

  const isBeforeEarlyBirdDeadline = new Date() < new Date("2026-06-01");

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
      <SnapSection showScrollIndicator={false} color="forestDark" containInnerScroll>
        <div
          className={css({
            textStyle: "body",
            fontSize: "1.5rem",
            maxWidth: "48rem",
            mx: "1rem",
            alignItems: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            textAlign: "center",
            my: "2rem",
          })}
        >
          <h2 className={css({ textStyle: "heading", margin: 0 })}>Who are we?</h2>
          <div
            className={css({
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              flexWrap: "wrap",
            })}
          >
            <DianaImage />
            <DanImage />
          </div>
          Together, Diana and Dan have over 50 years of teaching experience. Diana is an experienced
          Safeguarding Lead - level 3 DSL and Dan is an experienced and qualified Forest School
          Leader.
          <Link
            to="/about"
            className={css({
              alignSelf: "center",
              backgroundColor: "accent.candlelight",
              textStyle: "highlight",
              color: "primary.oakBarkBrown",
              border: "2px solid",
              borderColor: "primary.oakBarkBrown",
              p: "1rem",

              margin: 0,
            })}
          >
            Find out more →
          </Link>
        </div>
      </SnapSection>
      <div
        ref={finalSectionRef}
        className={css({
          width: "100%",
          flexShrink: 0,
        })}
      >
        <ContentSection
          title={isBeforeEarlyBirdDeadline ? "Early Bird Tickets Available" : "Tickets Available"}
          gap="1.5rem"
        >
          <p
            className={css({
              textStyle: "highlight",
              margin: 0,
            })}
          >
            20th-24th July and 24th-28th Aug 2026 | 10am - 4pm
          </p>
          <p
            className={css({
              fontSize: "1.5rem",
              margin: 0,
            })}
          >
            £400 for a full week of immersive woodland adventure
          </p>
          {isBeforeEarlyBirdDeadline ? (
            <p
              className={css({
                fontSize: "1.5rem",
                margin: 0,
              })}
            >
              Early bird tickets available for £350 until 14th June
            </p>
          ) : null}
          <h2
            className={css({
              textStyle: "subheading",
              margin: 0,
            })}
          >
            Only 25 places available
          </h2>
          <BookNow color="blackberry" />
        </ContentSection>
      </div>
    </div>
  );
}

export default App;
