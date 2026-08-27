"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/** Below this width the effect is disabled: there is no cursor to follow. */
const DESKTOP_QUERY = "(min-width: 768px)";

/**
 * Soft radial highlight that follows the cursor, in dark mode only.
 *
 * Kept in its own component on purpose: the pointer position changes on every
 * mouse move, and holding that state in the root layout re-rendered the whole
 * page tree each time. Updates are also coalesced into one animation frame.
 *
 * Must be rendered outside the centred page container — `absolute inset-0`
 * resolves against `<body>`, which is the only positioned ancestor.
 *
 * @returns {JSX.Element | null} The overlay, or nothing when it does not apply.
 */
const CursorGradient = () => {
  const { resolvedTheme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  // `resolvedTheme` is undefined until next-themes has read the stored
  // preference, so the overlay simply stays out of the tree until then.
  const isEnabled = isDesktop && resolvedTheme === "dark";

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const sync = () => setIsDesktop(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isEnabled) return undefined;

    let frame = 0;
    let clientY = 0;

    // The overlay spans the document, not the viewport, so the scroll offset
    // has to be added back to keep the highlight under the pointer.
    const update = (x, y) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setOrigin({ x, y: y + window.scrollY })
      );
    };

    const handleMouseMove = (event) => {
      clientY = event.clientY;
      update(event.clientX, clientY);
    };

    const handleScroll = () => update(origin.x, clientY);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
    // `origin.x` is only read to keep the highlight in place while scrolling;
    // re-subscribing on every move would defeat the throttling above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px at ${origin.x}px ${origin.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
      }}
    />
  );
};

export default CursorGradient;
