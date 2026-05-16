import { createContext, useContext, useState, type ReactNode } from "react";

type NavHomeFinalSectionContextValue = {
  isHomeFinalInView: boolean;
  setHomeFinalInView: (value: boolean) => void;
};

const NavHomeFinalSectionContext = createContext<NavHomeFinalSectionContextValue | null>(null);

export function NavHomeFinalSectionProvider({ children }: { children: ReactNode }) {
  const [isHomeFinalInView, setHomeFinalInView] = useState(false);
  return (
    <NavHomeFinalSectionContext.Provider value={{ isHomeFinalInView, setHomeFinalInView }}>
      {children}
    </NavHomeFinalSectionContext.Provider>
  );
}

export function useNavHomeFinalSection() {
  const ctx = useContext(NavHomeFinalSectionContext);
  if (!ctx) {
    throw new Error("useNavHomeFinalSection must be used within NavHomeFinalSectionProvider");
  }
  return ctx;
}

export function useNavHomeFinalSectionSafe(): boolean {
  return useContext(NavHomeFinalSectionContext)?.isHomeFinalInView ?? false;
}
