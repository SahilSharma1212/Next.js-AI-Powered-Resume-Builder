"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CircleX } from "lucide-react";
import React from "react";

export default function ProjectSectionPage({
  projectname,
  setProjectname,
  projectdescription,
  setProjectdescription,
  allprojects,
  setAllprojects,
}: {
  projectname: string;
  projectdescription: string;
  allprojects: Array<{ projectname: string; projectdescription: string }>;
  setProjectname: React.Dispatch<React.SetStateAction<string>>;
  setProjectdescription: React.Dispatch<React.SetStateAction<string>>;
  setAllprojects: React.Dispatch<
    React.SetStateAction<
      Array<{ projectname: string; projectdescription: string }>
    >
  >;
}) {

    const { toast } = useToast();


  const addProject = () => {
    if (projectname !== "" && projectdescription !== "") {
      setAllprojects([
        ...allprojects,
        {
          projectname: projectname,
          projectdescription: projectdescription,
        },
      ]);
      setProjectname("");
      setProjectdescription("");
    } else {
      toast({
        title: "Some details missing",
        description: "please fill complete details",
        className: "bg-black text-white border-gray-600",
      });
    }
  };

  // Function to remove a qualification by index

  const removeProject = (index: number) => {
    const newprojects = allprojects.filter((_, i) => i !== index);
    setAllprojects(newprojects);
  };

  return (
    <div
      id="projects-section"
      className="flex flex-col self-start max-w-96"
    >
      <p className="text-xl sm:text-lg font-semibold">Projects</p>
      <div>
        <Label htmlFor="projectname">Project Name</Label>
        <Input
          placeholder="Social Media Clone"
          value={projectname}
          onChange={(e) => {
            setProjectname(e.target.value);
          }}
        />

        <div>
          <Label htmlFor="projectdescription">Project description</Label>
          <Input
            type="text"
            id="projectdescription"
            placeholder="Ex. Tech used / Functionality ......"
            value={projectdescription}
            onChange={(e) => setProjectdescription(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-2 ">
          <Button
            className="text-black text-sm bg-white hover:bg-gray-200  px-3 h-12 rounded-md"
            onClick={addProject}
          >
            Add Project
          </Button>
          {allprojects.map((project, index) => (
            <p
              key={index}
              className="text-sm rounded-lg px-2 py-2 bg-white/10 text-white flex gap-1 items-center"
            >
              {project.projectname}
              <CircleX
                strokeWidth={1}
                size={18}
                className="text-gray-400 hover:text-red-500 transition"
                onClick={() => {
                  removeProject(index);
                }}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
