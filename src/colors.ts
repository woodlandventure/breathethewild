export const colorTheme = {
  colors: {
    // Primary Backgrounds
    background: {
      dark: "#1A1D21" as const,
      paper: "#fdf5e6" as const,
      surface: "#2F3540" as const,
    },

    // Brand & Accents
    primary: {
      main: "#D4AF37" as const,
      light: "#F8E0A1" as const,
    },

    // Forest & Nature Tones
    forest: {
      deep: "#16421F" as const,
      olive: "#586F45" as const,
    },

    // Warmth & Feedback
    accent: {
      fire: "#D2691E" as const,
      ember: "#F5DEB3" as const,
    },
  },

  // Suggested Gradients for a sleek modern look
  gradients: {
    sunlitCanopy: "linear-gradient(135deg, #16421F, #A2CD29)" as const,
    goldenGlow: "linear-gradient(to right, #D4AF37, #F8E0A1)" as const,
  },
} as const;
