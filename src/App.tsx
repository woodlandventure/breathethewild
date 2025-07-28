import { css } from "../styled-system/css";
import BackgroundImage from "./assets/BackgroundImage.jpg";
import LogoImage from "./assets/LogoImage.jpg";
import "./index.css";

function App() {
  return (
    <div
      className={css({
        height: "100vh",
        width: "100vw",
        bg: "#f5f5dc",
        position: "absolute",
        display: "flex",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      })}
    >
      {/* Background Image */}
      <div
        className={css({
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        })}
      >
        <img
          src={BackgroundImage}
          alt="Background"
          className={css({
            height: "100%",
            width: "auto",
            objectFit: "cover",
            objectPosition: "center",
          })}
        />
      </div>

      {/* Cream Overlay */}
      <div
        className={css({
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "#f5f5dc",
          opacity: "0.3",
          zIndex: "1",
        })}
      />

      {/* Content */}
      <div
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: "2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: "4",
        })}
      >
        <div
          className={css({
            px: "4",
          })}
        >
          <h1
            className={css({
              fontSize: { base: "3xl", md: "5xl", lg: "6xl" },
              fontWeight: "bold",
              color: "#1a1a1a",
              margin: "0",
              mb: "4",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            })}
          >
            Breathe The Wilde
          </h1>
          <p
            className={css({
              fontSize: { base: "xl", md: "2xl", lg: "3xl" },
              color: "#374151",
              margin: "0",
              fontWeight: "medium",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            })}
          >
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
