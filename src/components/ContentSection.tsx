import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { ScallopedCorners } from "./ScallopedCorners";
import { SnapSection } from "./SnapSection";

export const ContentSection = ({
  title,
  children,
  gap = "1rem",
}: {
  title: string;
  children: ReactNode;
  gap?: string;
}) => {
  return (
    <SnapSection color="firelight" showScrollIndicator={false}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <ScallopedCorners
          className={css({
            maxWidth: "56rem",
            m: "1rem",
            shadow: "md",
          })}
          contentClassName={css({
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            color: "secondary.blackberry",
            py: "3rem",
            px: "2rem",
          })}
        >
          <div
            style={{
              gap,
            }}
            className={css({
              display: "flex",
              flexDirection: "column",
            })}
          >
            <h2
              className={css({
                textStyle: "heading",
                margin: 0,
              })}
            >
              {title}
            </h2>
            {children}
          </div>
        </ScallopedCorners>
      </motion.div>
    </SnapSection>
  );
};
