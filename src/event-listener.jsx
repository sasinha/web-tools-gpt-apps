import { useEffect } from "react";

export const eventListener = (type, f, deps = []) =>
  useEffect(() => {
    window.addEventListener(type, f);
    return () => window.removeEventListener(type, f);
  }, deps);
