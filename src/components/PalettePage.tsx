import { css } from "../../styled-system/css";
import { colorTheme } from "../colors";

const formatName = (name: string) => {
  return name.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
};

export const PalettePage = () => {
  return (
    <main
      className={css({
        height: "100dvh",
        width: "100%",
        overflowY: "auto",
        backgroundColor: "primary.blackberry",
        color: "secondary.parchmentCream",
        p: { base: "1.5rem", md: "3rem" },
      })}
    >
      <h1
        className={css({
          textStyle: "heading",
          margin: 0,
          mb: "2rem",
          color: "accent.candlelight",
        })}
      >
        Colour Palette
      </h1>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        })}
      >
        {Object.entries(colorTheme.colors).map(([groupName, colors]) => (
          <section key={groupName}>
            <h2
              className={css({
                textStyle: "subheading",
                margin: 0,
                mb: "1rem",
                color: "primary.emberGold",
              })}
            >
              {formatName(groupName)}
            </h2>
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: {
                  base: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                  lg: "repeat(3, minmax(0, 1fr))",
                },
                gap: "1rem",
              })}
            >
              {Object.entries(colors).map(([colorName, hex]) => (
                <article
                  key={colorName}
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    backgroundColor: "secondary.parchmentCream",
                    color: "primary.deepForestGreen",
                    p: "1rem",
                  })}
                >
                  <div
                    style={{ backgroundColor: hex }}
                    className={css({
                      width: "4rem",
                      height: "4rem",
                      flexShrink: 0,
                      border: "2px solid token(colors.primary.oakBarkBrown)",
                    })}
                  />
                  <div>
                    <h3
                      className={css({
                        textStyle: "highlight",
                        margin: 0,
                      })}
                    >
                      {formatName(colorName)}
                    </h3>
                    <p
                      className={css({
                        textStyle: "body",
                        margin: 0,
                      })}
                    >
                      {hex}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};
