import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { useNavHomeFinalSectionSafe } from "../context/NavHomeFinalSectionContext";

type NavItem =
  | {
      to: string;
      href: undefined;
      label: string;
    }
  | {
      href: string;
      to: undefined;
      label: string;
    };

const navItems: NavItem[] = [
  { to: "/", href: undefined, label: "Home" },
  { to: "/about", href: undefined, label: "About us" },
  { to: "/faq", href: undefined, label: "FAQs" },
  { to: "/contact", href: undefined, label: "Contact" },
  {
    href: "https://buytickets.at/breathethewildtheatrecompany/2215560",
    to: undefined,
    label: "Book now",
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isHomeFinalInView = useNavHomeFinalSectionSafe();

  const menuBarClass = css({
    display: "block",
    width: "100%",
    height: "2px",
    backgroundColor: isHomeFinalInView ? "primary.oakBarkBrown" : "accent.candlelight",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const itemClass = css({
    textStyle: "body",
    color: isHomeFinalInView ? "primary.oakBarkBrown" : "accent.candlelight",
    textDecoration: "none",
    outline: "none",
  });

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={css({
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.5rem",
        px: isOpen ? 0 : "0.75rem",
        py: isOpen ? 0 : "0.5rem",
      })}
    >
      {isOpen ? (
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.5rem",
            p: "1rem",
            borderEndStartRadius: "1rem",
            borderLeft: "2px solid",
            borderBottom: "2px solid",
            borderColor: isHomeFinalInView ? "primary.oakBarkBrown" : "accent.candlelight",
            pt: "max(1rem, env(safe-area-inset-top))",
            pr: "max(1rem, env(safe-area-inset-right))",
            backgroundColor: !isHomeFinalInView ? "primary.deepForestGreen" : "accent.candlelight",
          })}
        >
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.to}
                to={item.to}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={itemClass}
                activeProps={{
                  className: css({
                    color: "accent.candlelight",
                    textDecoration: "underline",
                  }),
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={itemClass}>
                {item.label}
              </a>
            ),
          )}
        </div>
      ) : (
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className={css({
            textStyle: "body",
            color: isHomeFinalInView ? "primary.oakBarkBrown" : "accent.candlelight",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            p: 0,
            width: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            mt: "max(1rem, env(safe-area-inset-top))",
            mr: "max(1rem, env(safe-area-inset-right))",
          })}
        >
          <span className={menuBarClass} />
          <span className={menuBarClass} />
          <span className={menuBarClass} />
        </button>
      )}
    </nav>
  );
};
