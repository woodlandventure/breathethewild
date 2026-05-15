import { css } from "../../styled-system/css";
import { SnapSection } from "./SnapSection";

export const IntroSection = () => {
  return (
    <SnapSection color="forestDark">
      <div
        className={css({
          textAlign: "center",
          textStyle: "subheading",
          margin: "2rem",
          color: "accent.candlelight",
        })}
      >
        Travel back to a world of secrets, suspicion & survival
      </div>
      <div
        className={css({
          textAlign: "center",
          textStyle: "body",
          maxWidth: "48rem",
          mx: "1rem",
        })}
      >
        An immersive outdoor adventure set in the ancient oak woodland of Langton Green.
      </div>
    </SnapSection>
  );
};
