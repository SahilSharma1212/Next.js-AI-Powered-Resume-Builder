"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Effortlessly",
      className:"text-white"
    },
    {
      text:'create',
      className:'text-white'
    },
    {
      text:'a',
      className:'text-white'
    },
    {
      text:'professional',
      className:'text-white'
    },
    {
      text:'eye-catching',
      className:'text-white'
    },
    {
      text:'resume',
      className:'text-white'
    },
    {
      text:'tailored',
      className:'text-white'
    },
    {
      text:'for',
      className:'text-white'
    },
    {
      text:'students,',
      className:'text-white'
    },
    {
      text:'using',
      className:'text-white'
    },
    {
      text:'cutting-edge',
      className:'text-white'
    },
    {
      text:'AI',
      className:'text-white'
    },
    {
      text:'technology.',
      className:'text-white'
    },
    {
      text:'Get',
      className:'text-white'
    },
    {
      text:'noticed',
      className:'text-white'
    },
    {
      text:'by',
      className:'text-white'
    },
    {
      text:'recruiters',
      className:'text-white'
    },
    {
      text:'and',
      className:'text-white'
    },
    {
      text:'out',
      className:'text-white'
    },
    {
      text:'in',
      className:'text-white'
    },
    {
      text:'the',
      className:'text-white'
    },
    {
      text:'job',
      className:'text-white'
    },
    {
      text:'market',
      className:'text-white'
    },
    {
      text:'!',
      className:'text-white'
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center text-white text-sm ">
      
      <TypewriterEffect words={words} className="text-sm" />
      
    </div>
  );
}
