import { css } from "../../styled-system/css";
import { ScallopedCorners } from "./ScallopedCorners";

export const Card = ({ text }: { text: string }) => {
  return (
    <ScallopedCorners
      className={css({
        width: "15rem",
        height: "15rem",
      })}
      contentClassName={css({
        color: "primary.oakBarkBrown",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "2rem",
        padding: "1rem",
      })}
    >
      {text}
    </ScallopedCorners>
  );
};
