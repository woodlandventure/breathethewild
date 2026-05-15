import type { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const SnapSection = ({
  children,
  showScrollIndicator = true,
  color = "blackberry",
  containInnerScroll = false,
}: {
  children: ReactNode;
  showScrollIndicator?: boolean;
  color: "blackberry" | "forestDark" | "firelight";
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
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          backgroundColor:
            color === "blackberry"
              ? "secondary.blackberry"
              : color === "forestDark"
                ? "primary.deepForestGreen"
                : "primary.firelightAmber",
        })}
      >
        <div
          className={css({
            flex: "1 1 0",
            minHeight: 0,
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
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
        {showScrollIndicator && <ScrollDownIndicator />}
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
              : "primary.firelightAmber",
      })}
    >
      {children}
      {showScrollIndicator && <ScrollDownIndicator />}
    </section>
  );
};
