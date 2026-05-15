import { css } from "../../styled-system/css";
import { ScallopedCorners } from "./ScallopedCorners";

export const Card = ({ text }: { text: string }) => {
  return (
    <ScallopedCorners
      className={css({
        width: "min(20rem, calc(100vw - 2rem))",
        height: "min(20rem, calc(100vw - 2rem))",
      })}
      contentClassName={css({
        color: "primary.oakBarkBrown",
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
