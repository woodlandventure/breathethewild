import type { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const SnapSection = ({
  children,
  showScrollIndicator = true,
  color = "blackberry",
}: {
  children: ReactNode;
  showScrollIndicator?: boolean;
  color: "blackberry" | "forestDark" | "firelight";
}) => {
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
