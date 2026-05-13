import { css } from "../../styled-system/css";
import { ScallopedCorners } from "./ScallopedCorners";

export const Card = ({ text }: { text: string }) => {
  return (
    <ScallopedCorners
      className={css({
        width: "20rem",
        height: "20rem",
      })}
      contentClassName={css({
          color: "background.surface",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          textStyle: "subheading",
          padding: "1rem",
        })}
    >
      {text}
    </ScallopedCorners>
  );
};
