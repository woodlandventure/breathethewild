import { css } from "../styled-system/css";
import FullPoster from "./assets/FullPoster.jpg";
import "./index.css";

function App() {
  return (
    <div
      className={css({
        height: "100vh",
        width: "100vw",
        bg: "#787864",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      })}
    >
      {/* Background Image */}
      <div
        className={css({
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        })}
      >
        <img
          src={FullPoster}
          alt="Background"
          className={css({
            height: "100%",
            width: "auto",
            objectFit: "cover",
            objectPosition: "center",
          })}
        />
      </div>
    </div>
  );
}

export default App;
