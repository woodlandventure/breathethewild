import DanPhoto from "../assets/dan.jpeg";
import DianaPhoto from "../assets/di-portrait.jpg";
import { css } from "../../styled-system/css";

export const DianaImage = () => {
  return (
    <img src={DianaPhoto} alt="Portrait of Diana Gillinder" className={aboutPortraitPhotoClass} />
  );
};

export const DanImage = () => {
  return <img src={DanPhoto} alt="Portrait of Dan Gillinder" className={aboutPortraitPhotoClass} />;
};

export const AboutPage = () => {
  return (
    <main
      className={css({
        height: "100dvh",
        width: "100%",
        overflowY: "auto",
        overscrollBehaviorY: "contain",
        overscrollBehaviorX: "none",
        backgroundColor: "primary.deepForestGreen",
        color: "secondary.parchmentCream",
        p: { base: "1.5rem", md: "3rem" },
        pt: { base: "5rem", md: "6rem" },
      })}
    >
      <article
        className={css({
          maxWidth: "56rem",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        })}
      >
        <h1
          className={css({
            textStyle: "heading",
            margin: 0,
            color: "accent.candlelight",
            textAlign: "center",
          })}
        >
          Meet the team
        </h1>

        <h2
          className={css({
            textStyle: "subheading",
            margin: 0,
            color: "accent.candlelight",
            textAlign: "center",
          })}
        >
          Diana Gillinder
        </h2>

        <DianaImage />


        <p className={paragraphClass}>
          Breathe the Wild has been created by Diana Gillinder, an educator and
          theatre practitioner with a lifelong passion for storytelling, history
          and the transformative power of immersive experiences. She is First Aid
          trained and currently serves as Safeguarding Governor for a local
          Federation of Schools.
        </p>
        <p className={paragraphClass}>
          Alongside her educational work, Diana holds an MA in Acting and is
          currently taking a break from the cast of Keepsake of a Killer, a
          Whitechapel Murder Mystery, while she creates mischief for The Forest
          History Mystery.
        </p>
        <p className={paragraphClass}>
          During her MA, Diana experienced the power of stepping back in time and
          living in an authentic working woodland community. She wanted to bring
          that alchemy to others  as an adventurous antidote to the pressures of
          modern life; to offer an invite to leave the everyday behind for a while,
          look at life through different eyes and see what alchemy that brings.
        </p>

        <h2
          className={css({
            textStyle: "subheading",
            margin: 0,
            color: "accent.candlelight",
            textAlign: "center",
          })}
        >
          Dan Gillinder
        </h2>
        <DanImage />
        <p className={paragraphClass}>
          Dan Gillinder is the managing director of Woodland Venture and a fully
          qualified Forest School Leader who has been running Forest School programmes
          in partnership with local schools since 2013.
        </p>
        <p className={paragraphClass}>
          Dan has spent many years working as a Primary School teacher and has extensive
          experience leading outdoors as both an Outward-Bound instructor and Scout Leader.
          Whether deep in the woodland or behind the scenes of a local production, Dan
          brings practical expertise, creativity and calm reassurance to every adventure.
          He is often found building props, moving scenery or solving the kind of unexpected
          problems that appear in both theatre and woodland life. Dan is also fully trained
          in First Aid.
        </p>
        <p className={paragraphClass}>
          Together, Diana and Dan have raised five children, four now grown into successful
          adults, alongside one remaining successful teenager and they are enormously proud
          of and thankful to them all - especially Charlie (their favourite) who made this
          website
        </p>
        <p className={paragraphClass}>
          Together Breathe the Wild and Woodland Venture have joined forces to offer the
          rare space to imagine, collaborate, problem-solve, explore nature and become part
          of a living story.
        </p>
      </article>
    </main>
  );
};

const paragraphClass = css({
  textStyle: "body",
  margin: 0,
});

const aboutPortraitPhotoClass = css({
  alignSelf: "center",
  width: "min(14rem, 70vw)",
  height: "auto",
  aspectRatio: "3 / 4",
  objectFit: "cover",
  border: "4px solid black",
});
