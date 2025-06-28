"use client";

import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const router = useRouter();
 
    const { toast } = useToast();

  const handleLogout = async () => {
    const response = await axios.get("/api/users/logout")
    
    console.log("Logout success", response.data);
    toast({
      title: "Logout succesful",
      description: "You are now logged out",
      className: "bg-black text-white border-gray-600",
    });

    router.push("/");
  }

  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
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
      <div
        className="p-10 relative dark flex flex-col gap-6 rounded-xl"
        style={{ backgroundColor: "#14141495" }}
      >
        <div
          style={{ textAlign: "center" }}
          className="text-white text-2xl font-semibold"
        >
          Logout
        </div>

        {/* email */}
        <div className="flex gap-3 items-center">
          <Label htmlFor="Email" className="text-white">
            Are you sure you want to logout ?
          </Label>
          <Button
            className=""
            onClick={handleLogout}>
            Logout
          </Button>
        </div>

        

      </div>
    </div>
  );
}
