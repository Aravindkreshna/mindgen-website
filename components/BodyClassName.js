"use client";

import { useEffect } from "react";

export default function BodyClassName({ className }) {
  useEffect(() => {
    if (!className) {
      return undefined;
    }

    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);

  return null;
}
