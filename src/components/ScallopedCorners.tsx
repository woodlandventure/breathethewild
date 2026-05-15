import type { ReactNode } from "react";
import { css, cx } from "../../styled-system/css";

const scallopedMask = {
  WebkitMaskImage:
    "radial-gradient(2rem at 0 0, transparent 98%, black), radial-gradient(2rem at 100% 0, transparent 98%, black), radial-gradient(2rem at 0 100%, transparent 98%, black), radial-gradient(2rem at 100% 100%, transparent 98%, black)",
  WebkitMaskPosition: "0 0, 100% 0, 0 100%, 100% 100%",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskSize: "51% 51%, 51% 51%, 51% 51%, 51% 51%",
  maskImage:
    "radial-gradient(2rem at 0 0, transparent 98%, black), radial-gradient(2rem at 100% 0, transparent 98%, black), radial-gradient(2rem at 0 100%, transparent 98%, black), radial-gradient(2rem at 100% 100%, transparent 98%, black)",
  maskPosition: "0 0, 100% 0, 0 100%, 100% 100%",
  maskRepeat: "no-repeat",
  maskSize: "51% 51%, 51% 51%, 51% 51%, 51% 51%",
} as const;

export const ScallopedCorners = ({
  onClick,
  children,
  className,
  contentClassName,
}: {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        css({
          backgroundColor: "primary.oakBarkBrown",
          padding: "2px",
          ...scallopedMask,
        }),
        className,
      )}
    >
      <div
        className={cx(
          css({
            backgroundColor: "secondary.parchmentCream",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            ...scallopedMask,
          }),
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};
