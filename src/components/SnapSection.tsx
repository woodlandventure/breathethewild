import type { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const SnapSection = ({
  children,
  showScrollIndicator = true,
  scrollIndicatorTone = "light",
  color = "blackberry",
  containInnerScroll = false,
}: {
  children: ReactNode;
  showScrollIndicator?: boolean;
  scrollIndicatorTone?: "light" | "dark";
  color: "blackberry" | "forestDark" | "firelight" | "pineShadow";
  containInnerScroll?: boolean;
}) => {
  if (containInnerScroll) {
    return (
      <section
        className={css({
          position: "relative",
          height: "100dvh",
          minHeight: "100dvh",
          width: "100%",
          boxSizing: "border-box",
          flexShrink: 0,
          display: "block",
          overflow: "hidden",
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          backgroundColor:
            color === "blackberry"
              ? "secondary.blackberry"
              : color === "forestDark"
                ? "primary.deepForestGreen"
                : color === "pineShadow"
                  ? "woodland.pineShadow"
                  : "primary.firelightAmber",
        })}
      >
        {/* Absolute scrollport: WebKit often mishandles nested overflow-y inside flex + scroll-snap parents */}
        <div
          className={css({
            position: "absolute",
            inset: 0,
            overflowY: "auto",
            overflowX: "hidden",
            touchAction: "pan-y",
          })}
        >
          <div
            className={css({
              minHeight: "100%",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            {children}
          </div>
        </div>
        {showScrollIndicator && <ScrollDownIndicator tone={scrollIndicatorTone} />}
      </section>
    );
  }

  return (
    <section
      className={css({
        position: "relative",
        minHeight: "100dvh",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundColor:
          color === "blackberry"
            ? "secondary.blackberry"
            : color === "forestDark"
              ? "primary.deepForestGreen"
              : color === "pineShadow"
                ? "woodland.pineShadow"
                : "primary.firelightAmber",
      })}
    >
      {children}
      {showScrollIndicator && <ScrollDownIndicator tone={scrollIndicatorTone} />}
    </section>
  );
};
