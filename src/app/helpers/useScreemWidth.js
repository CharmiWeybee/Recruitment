import { useState, useLayoutEffect } from "react";

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return screenWidth;
}
