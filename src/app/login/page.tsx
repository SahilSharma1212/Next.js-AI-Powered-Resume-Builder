"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { LoginSchema } from "../../schemas/loginSchema";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleLogin = async (user: LoginSchema) => {
    try {
      const response = await axios.post("/api/users/login", user);

      console.log("Login success", response.data);
      toast({
        title: "Login Successful",
        description: "You are now logged in",
        className: "bg-black text-white border-gray-600",
      });

      // Redirect the user after successful login
      router.push("/browse-templates");
    } catch (error) {
      console.error("Login failed", error);

      // Show an error toast when login fails
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        className: "bg-red-600 text-white border-gray-600",
      });
    }
  };

  // Check if both email and password are filled
  const isFormValid = user.email.trim() !== "" && user.password.trim() !== "";

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
          Login
        </div>

        {/* email */}
        <div>
          <Label htmlFor="Email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Email"
            className="text-white mt-2"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>

        {/* password */}
        <div>
          <Label htmlFor="Password" className="text-white">
            Password
          </Label>
          <Input
            type="password"
            placeholder="Password"
            className="text-white mt-2"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-5">
          <Button
            disabled={!isFormValid}
            className={!isFormValid ? "opacity-50 cursor-not-allowed" : ""}
            onClick={() => handleLogin(user)}
          >
            Login
          </Button>
          <Button
            className="bg-transparent hover:bg-white/5 text-white border border-white"
            onClick={() => {
              router.push("/sign-up");
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
