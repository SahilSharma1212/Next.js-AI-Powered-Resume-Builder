"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CircleX } from "lucide-react";
import React, { FC } from "react";

// Define interface for soft skill
interface SoftSkill {
  softskillname: string;
}

// Define props interface
interface SoftSkillsSectionsProps {
  softskillname: string;
  softskills: SoftSkill[];
  setsoftskills: React.Dispatch<React.SetStateAction<SoftSkill[]>>;
  setsoftskillname: React.Dispatch<React.SetStateAction<string>>;
}

const SoftSkillsSections: FC<SoftSkillsSectionsProps> = ({
  softskillname,
  softskills,
  setsoftskills,
  setsoftskillname,
}) => {
  const { toast } = useToast();

  const addSoftSkill = () => {
    if (softskillname.trim() !== "") {
      setsoftskills([...softskills, { softskillname }]);
      setsoftskillname("");
    } else {
      toast({
        title: "Cannot add empty Skill",
        description: "Who would want you without any skill? 🤭",
        className: "bg-black text-white border-gray-600",
      });
    }
  };

  const removeSoftSkill = (index: number) => {
    const newSkills = softskills.filter((_, i) => i !== index);
    setsoftskills(newSkills);
  };

  return (
    <div id="skills-section" className="flex flex-col self-start max-w-96">
      <p className="text-xl sm:text-lg font-semibold">Soft Skills</p>
      <div>
        <div className="w-[30rem]">
          <Label htmlFor="softskills">Soft-Skill Name</Label>
          <Input
            placeholder="Ex. Communication"
            value={softskillname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setsoftskillname(e.target.value)
            }
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <Button
            className="text-black text-sm bg-white hover:bg-gray-200 px-3 h-12 rounded-md"
            onClick={addSoftSkill}
          >
            Add Skill
          </Button>

          {/* Display Skills */}
          {softskills.map((skill, index) => (
            <p
              key={index}
              className="text-sm rounded-lg px-3 py-2 bg-white/10 text-white flex gap-2 items-center border border-gray-500"
            >
              {skill.softskillname}
              <CircleX
                strokeWidth={1}
                size={18}
                className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                onClick={() => removeSoftSkill(index)}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsSections;