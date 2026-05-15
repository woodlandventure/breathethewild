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
        color: "primary.oakBarkBrown",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "2.5rem",
        padding: "1rem",
      })}
    >
      {text}
    </ScallopedCorners>
  );
};
