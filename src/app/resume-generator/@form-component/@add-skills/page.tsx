"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CircleX } from "lucide-react";
import React from "react";

export default function SkillSectionPage({
  skillname,
  setSkillName,
  skilllevel,
  setSkilllevel,
  allSkils,
  setAllSkils,
}: {
  skillname: string;
  setSkillName: React.Dispatch<React.SetStateAction<string>>;
  skilllevel: string;
  setSkilllevel: React.Dispatch<React.SetStateAction<string>>;
  allSkils: Array<{ skillname: string; skilllevel: string }>;
  setAllSkils: React.Dispatch<
    React.SetStateAction<Array<{ skillname: string; skilllevel: string }>>
  >;
}) {
  const { toast } = useToast();

  const addSkill = () => {
    if (skillname.trim() !== "" && skilllevel.trim() !== "") {
      setAllSkils([...allSkils, { skillname, skilllevel }]);
      setSkillName("");
      setSkilllevel("");
    } else {
      toast({
        title: "Cannot add empty Skill",
        description: "Who would want you without any skill? 🤭",
        className: "bg-black text-white border-gray-600",
      });
    }
  };

  const removeSkill = (index: number) => {
    const newSkills = allSkils.filter((_, i) => i !== index);
    setAllSkils(newSkills);
  };

  return (
    <div id="skills-section" className="flex flex-col self-start max-w-96 ">
      <p className="text-xl sm:text-lg font-semibold">Skills</p>
      <div>
        <div className="w-[30rem]">
          <Label htmlFor="skills">Skill Name</Label>
          <Input
            placeholder="Ex. Python Programming"
            value={skillname}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="skill-level" className="mt-2">
            Skill Level
          </Label>

          <Select
            key={skilllevel}
            onValueChange={(value) => setSkilllevel(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a skill level" />
            </SelectTrigger>
            <SelectContent className="bg-[#141414] text-white border-none">
              <SelectGroup>
                <SelectLabel>Skill Level</SelectLabel>
                <SelectItem value="Naive">Naive</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Expert">Expert</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <Button
            className="text-black text-sm bg-white hover:bg-gray-200 px-3 h-12 rounded-md"
            onClick={addSkill}
          >
            Add Skill
          </Button>

          {/* Display Skills */}

          {allSkils.map((skill, index) => (
            <p
              key={index}
              className="text-sm rounded-lg px-3 py-2 bg-white/10 text-white flex gap-2 items-center border border-gray-500"
            >
              {skill.skillname} ({skill.skilllevel}){" "}
              <CircleX
                strokeWidth={1}
                size={18}
                className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                onClick={() => removeSkill(index)}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
