"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./hover-border-gradient";
import { TypewriterEffectDemo } from "./type-writer-demo-description";
import { TypewriterEffectSmoothDemo } from "./type-writer-demo-logo-name";
import { BackgroundBoxesDemo } from "@/components/box-component";
import { Spotlight } from "./ui/spotlight-new";

export function SparklesPreview() {
  const [brandnameVisible, setBrandnameVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setLogoVisible(true), 1000),
      setTimeout(() => setBrandnameVisible(!brandnameVisible), 1500),
      setTimeout(() => setButtonsVisible(true), 2500),
    ];

    return () => timeouts.forEach(clearTimeout); // Cleanup on unmount
  }, []);

  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      
      <Spotlight/>
      <div className="w-full absolute inset-0 min-h-screen z-0 ">
        <BackgroundBoxesDemo/>
      </div>

      {/* Container for logo, brand name, and description */}
      <div className="flex flex-col items-center w-full justify-center gap-10">
        
        {/* Logo + Brand Name */}
        <div className="flex items-center flex-wrap gap-3">
          {/* Logo */}
          <div
            className={`transition-opacity duration-1000 z-10 ${
              logoVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image alt="logo" src="/roopantarlogo.png" width={100} height={100} />
          </div>

          {/* Brand Name */}
          
          <TypewriterEffectSmoothDemo/>
        </div>

    
        {/* description */}
        <div
          className="transition-all duration-1000 ease-in-out text-white max-w-[900px] text-center z-10">
            <TypewriterEffectDemo/>

        </div>

        {/* Buttons */}
        <div
          className={`dark flex justify-center gap-5 transition-opacity duration-1000 ${
            buttonsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <HoverBorderGradientDemo buttonText="Create your Resume" pageLink="/browse-templates" />

          <HoverBorderGradientDemo buttonText="Explore !" pageLink="/" showToast={true} toastTitle="Explore Unable" toastDescription="We are still adding more content " />
        </div>
      </div>
    </div>
  );
}

