import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { css } from "../../styled-system/css";

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
    color: "accent.candlelight",
    textDecoration: "none",
    outline: "none",
  });

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={css({
        position: "fixed",
        top: "max(1rem, env(safe-area-inset-top))",
        right: "max(1rem, env(safe-area-inset-right))",
        zIndex: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.5rem",
        px: "0.75rem",
        py: "0.5rem",
      })}
    >
      {isOpen ? (
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.5rem",
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
            color: "accent.candlelight",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            p: 0,
            width: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
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

const menuBarClass = css({
  display: "block",
  width: "100%",
  height: "2px",
  backgroundColor: "accent.candlelight",
});
