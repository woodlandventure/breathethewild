import { css } from "../styled-system/css";
import BackgroundImage from "./assets/BackgroundImage.jpg";
import LogoImage from "./assets/LogoImage.jpg";

function App() {
  return (
    <div
      className={css({
        minH: "100vh",
        bg: "secondary",
        color: "primary",
        fontFamily: "body",
      })}
    >
      <div
        className={css({
          maxW: "1200px",
          mx: "auto",
          px: { base: "4", md: "6" },
          py: { base: "8", md: "12" },
        })}
      >
        {/* Header */}
        <header
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4",
            mb: { base: "12", md: "16" },
          })}
        >
          <h1
            className={css({
              fontSize: { base: "2xl", md: "4xl" },
              fontWeight: "bold",
              textAlign: "center",
              margin: "0",
            })}
          >
            Breathe The Wilde
          </h1>
          <p
            className={css({
              fontSize: { base: "lg", md: "xl" },
              color: "gray.600",
              textAlign: "center",
              margin: "0",
            })}
          >
            Coming Soon
          </p>
        </header>

        {/* Image Gallery */}
        <main
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: { base: "8", md: "12" },
            alignItems: "center",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: { base: "column", md: "row" },
              gap: { base: "6", md: "8" },
              width: "full",
              justifyContent: "center",
            })}
          >
            {/* Background Image */}
            <div
              className={css({
                position: "relative",
                overflow: "hidden",
                borderRadius: "xl",
                boxShadow: "xl",
                transition: "all 0.3s ease",
                _hover: {
                  transform: "scale(1.02)",
                  boxShadow: "2xl",
                },
              })}
            >
              <img
                src={BackgroundImage}
                alt="Background"
                className={css({
                  width: { base: "full", md: "400px" },
                  height: { base: "300px", md: "300px" },
                  objectFit: "cover",
                  display: "block",
                })}
              />
              <div
                className={css({
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bg: "rgba(0,0,0,0.7)",
                  color: "white",
                  p: "3",
                  textAlign: "center",
                })}
              >
                <span
                  className={css({
                    fontSize: "sm",
                    fontWeight: "medium",
                  })}
                >
                  Background
                </span>
              </div>
            </div>

            {/* Logo Image */}
            <div
              className={css({
                position: "relative",
                overflow: "hidden",
                borderRadius: "xl",
                boxShadow: "xl",
                transition: "all 0.3s ease",
                _hover: {
                  transform: "scale(1.02)",
                  boxShadow: "2xl",
                },
              })}
            >
              <img
                src={LogoImage}
                alt="Logo"
                className={css({
                  width: { base: "full", md: "400px" },
                  height: { base: "300px", md: "300px" },
                  objectFit: "cover",
                  display: "block",
                })}
              />
              <div
                className={css({
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bg: "rgba(0,0,0,0.7)",
                  color: "white",
                  p: "3",
                  textAlign: "center",
                })}
              >
                <span
                  className={css({
                    fontSize: "sm",
                    fontWeight: "medium",
                  })}
                >
                  Logo
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6",
              maxW: "600px",
              mx: "auto",
              textAlign: "center",
            })}
          >
            <p
              className={css({
                fontSize: { base: "lg", md: "xl" },
                color: "gray.700",
                lineHeight: "relaxed",
                margin: "0",
              })}
            >
              Something beautiful is coming. Stay tuned for updates.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer
          className={css({
            display: "flex",
            justifyContent: "center",
            mt: { base: "16", md: "20" },
            pt: "8",
            borderTop: "1px solid",
            borderColor: "gray.200",
          })}
        >
          <p
            className={css({
              fontSize: "sm",
              color: "gray.500",
              margin: "0",
            })}
          >
            &copy; 2024 Breathe The Wilde. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
