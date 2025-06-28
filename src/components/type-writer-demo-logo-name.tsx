"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "ROOPANTAR",
      className:"text-white"
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center z-10  ">
      <TypewriterEffect words={words} />
    </div>
  );
}
