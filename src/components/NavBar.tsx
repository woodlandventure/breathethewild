import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { css } from "../../styled-system/css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
] as const;

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

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={css({
        position: "fixed",
        top: "max(1rem, env(safe-area-inset-top))",
        right: "max(1rem, env(safe-area-inset-right))",
        zIndex: 50,
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
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={css({
                textStyle: "body",
                color: "accent.candlelight",
                textDecoration: "none",
                outline: "none",
              })}
              activeProps={{
                className: css({
                  color: "accent.candlelight",
                  textDecoration: "underline",
                }),
              }}
            >
              {item.label}
            </Link>
          ))}
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
