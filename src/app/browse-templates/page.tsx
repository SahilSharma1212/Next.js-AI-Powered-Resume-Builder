"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Reusable Template Card Component
const TemplateCard = ({ src, label, templateName }: { src: string; label: string; templateName: string }) => {
  const router = useRouter();
  const handleSelectTemplate = () => router.push(`/resume-generator?template=${templateName}`);

  return (
    <div
      className="h-80 w-60 relative group transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer"
      onClick={handleSelectTemplate}
    >
      <Image src={src} alt={`${label} Resume Template`} fill className="object-cover" />
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/10 text-white px-3 py-2 rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-16 pointer-events-none whitespace-nowrap max-sm:opacity-100">
        {label}
      </p>
    </div>
  );
};

export default function LoginPage() {
  const templates = [
    { src: "/template3.png", label: "Basic Monochrome", templateName: "BasicMonochrome" },
    { src: "/SubtleBlue.png", label: "Subtle Blue", templateName: "SubtleDarkBlue" },
    { src: "/template1.png", label: "Orange & Beige", templateName: "OrangeAndBeige" },
  ];

  return (
    <div className="h-screen w-screen relative bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-screen absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="h-full w-full relative dark p-4 flex flex-col gap-6 rounded-xl bg-[#14141495]">
        <p className="text-4xl sm:text-7xl font-bold z-50 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
          Start your Resume Building
        </p>
        <hr />

        {/* Template container */}
        <div className="w-full p-4 flex flex-wrap justify-center gap-8 max-sm:flex-col max-sm:items-center max-sm:gap-16 max-sm:overflow-y-scroll">
          {templates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>
      </div>
    </div>
  );
}
