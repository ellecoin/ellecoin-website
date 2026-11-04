"use client";
import { useCallback, useEffect, useState } from "react";

export default function useMediaQuery(maxWidth) {
  const [matches, setMatches] = useState(false);

  const onChange = useCallback((event) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${maxWidth}px)`);
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
    }
    if (mql.matches) setMatches(true);
    return mql.removeEventListener
      ? () => mql.removeEventListener("change", onChange)
      : () => mql.removeListener(onChange);
  }, [maxWidth, onChange]);

  return matches;
}
