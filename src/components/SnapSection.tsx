import type { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const SnapSection = ({
  children,
  showScrollIndicator = true,
}: {
  children: ReactNode;
  showScrollIndicator?: boolean;
}) => {
  return (
    <section
      className={css({
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      })}
    >
      {children}
      {showScrollIndicator && <ScrollDownIndicator />}
    </section>
  );
};
