"use client"; // ✅ Client Component (needed for useEffect & useState)

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function SubtleDarkBluePreview({ oneTemplate }: { oneTemplate: any }) {
  return (
    <div className="h-full w-full flex">
      {/* Left Blue Section with Vertical Text */}
      <div className="w-[30%] flex bg-blue-950 flex-col items-center justify-center">
        <p
          className="text-white text-xl tracking-wider"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {oneTemplate.role}
        </p>
      </div>

      {/* Name Section */}
      <div className="w-[70%] p-4">
        <span className="text-lg">
          {oneTemplate.name.first} {oneTemplate.name.last}
        </span>
        <br />
        <span className="text-sm">({oneTemplate.phone})</span>
      </div>
    </div>
  );
}

export function OrangeAndBeigePreview({ oneTemplate }: { oneTemplate: any }) {
  return (
    <div className="h-full w-full flex">
      <div className="w-[30%] flex bg-[#fcf8e1] flex-col">
        <div className="h-[40%] bg-red-400"></div>
      </div>
      <div className="p-4 text-lg">
        {oneTemplate.name.first} {oneTemplate.name.last}
      </div>
    </div>
  );
}

export function BasicMonochromePreview({ oneTemplate }: { oneTemplate: any }) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[20%] bg-[#141414] flex items-center text-white justify-center">
        <span className="text-lg">{oneTemplate.role}</span>
      </div>
      <div className="h-[80%] flex justify-center items-start pt-3">
        {oneTemplate.name.first} {oneTemplate.name.last}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [templates, setTemplates] = useState<string[]>([]); // ✅ Explicitly define type
  const router = useRouter();
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get("/api/users/profile", {
          withCredentials: true, // ✅ Sends authentication cookies
        });

        setUser(res.data.username || "User"); // ✅ Handle missing username
        setTemplates(res.data.templates || []); // ✅ Ensure array
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);
  
  const toast = useToast()

  if (loading) return <p className="text-center text-lg">Loading profile...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;


  const handleDeleteResume = async (resumeId: string) => {
    console.log("Deleting resume with ID:", resumeId);
  
    try {
      const deletingResume = await axios.delete(`/api/resume/delete-resume?resumeId=${resumeId}`);
  
      if (deletingResume.status === 200) {
        toast.toast({
          title: "Resume Deleted",
          description: "Your resume has been successfully deleted.",
          className:"bg-[#141414] text-white"
        });
  
        // Remove deleted resume from UI
        setTemplates((prev) => prev.filter((t) => t._id !== resumeId));
      }
    } catch (error) {
      console.error("Error deleting resume:", error);
      toast.toast({
        title: "Error",
        description: "Failed to delete resume. Try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="dark">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute z-10 pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

        <div className="px-7">
          <p className="text-4xl sm:text-7xl font-bold z-50 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Hello, {user}
          </p>
          <hr />
          <div className="p-2 py-7 flex items-center justify-start gap-5 flex-wrap">
            {/* ✅ Use `map()` instead of `forEach()` */}
            {templates.length > 0 ? (
              templates.map((oneTemplate, index) => (
                <div key={index}>
                  <div
                    className="w-56 h-72 rounded-md bg-slate-100 flex items-center justify-center flex-col hover:cursor-pointer hover:scale-105 transition-all overflow-hidden"
                    onClick={() => {
                      router.push(
                        `/resume-testing?templateId=${oneTemplate._id}`
                      );
                    }}
                  >
                    {oneTemplate.templatename === "SubtleDarkBlue" && (
                      <SubtleDarkBluePreview oneTemplate={oneTemplate} />
                    )}

                    {oneTemplate.templatename === "OrangeAndBeige" && (
                      <OrangeAndBeigePreview oneTemplate={oneTemplate} />
                    )}
                    {oneTemplate.templatename === "BasicMonochrome" && (
                      <BasicMonochromePreview oneTemplate={oneTemplate} />
                    )}
                  </div>
                  <Button className="mt-3 bg-[#141414] text-white hover:bg-white/10"
                    onClick={() => {
                      handleDeleteResume(oneTemplate._id);
                    }}
                  >
                    Delete <Trash2 strokeWidth={1} />
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No templates found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
