"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React from "react";

export default function WorkExperiencePage({
  companyname,
  setCompanyname,
  duration,
  setDuration,
  jobtitle,
  setJobtitle,
  allrole,
  setAllrole,
}: {
  companyname: string;
  setCompanyname: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  jobtitle: string;
  setJobtitle: React.Dispatch<React.SetStateAction<string>>;
  allrole: Array<{ companyname: string; duration: string; jobtitle: string }>;
  setAllrole: React.Dispatch<
    React.SetStateAction<
      Array<{ companyname: string; duration: string; jobtitle: string }>
    >
  >;
}) {


  const { toast } = useToast();


  const addRole = () => {
    if (companyname && duration && jobtitle) {
      setAllrole([...allrole, { companyname, duration, jobtitle }]);
      setCompanyname("");
      setDuration("");
      setJobtitle("");
    }else{
      toast({
        title: "Cannot add empty role",
        description: "You need to work on your skills !",
        className: "bg-black text-white border-gray-600",
      });
    }
  };

  const removeRole = (index: number) => {
    const newRoles = allrole.filter((_, i) => i !== index);
    setAllrole(newRoles);
  };

  


  return (
    <div id="educational-details" className="flex flex-col self-start max-w-96">
      <p className="text-xl">Work Experience</p>
      <div>
        <Label htmlFor="companyname">Company Name</Label>
        <Input
          type="text"
          id="companyname"
          placeholder="Company Name"
          value={companyname}
          onChange={(e) => {
            setCompanyname(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="duration">Duration Worked for</Label>
        <Input
          type="text"
          id="duration"
          placeholder="MM / YYYY   -   MM / YYYY"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="jobtitle">Job Title</Label>
        <Input
          type="text"
          id="jobtitle"
          placeholder="Ex. Intern"
          value={jobtitle}
          onChange={(e) => {
            setJobtitle(e.target.value);
          }}
        />
      </div>
      <div className=" flex items-center mt-3 gap-2 flex-wrap max-w-full ">
        <Button className="h-12" onClick={addRole}>
          Add role
        </Button>
        {allrole.length > 0 &&
          allrole.map((element, index) =>
            element.companyname && element.duration && element.jobtitle ? (
              <div key={index} className="flex items-center space-x-2">
                <div className="text-sm bg-white/25 px-2 py-1 rounded-lg flex items-center gap-2">
                  <p>
                    <span className="font-bold">{element.jobtitle}</span>
                    <br />
                    {element.companyname}
                  </p>
                  <CircleX
                    className="cursor-pointer text-gray-500 hover:text-red-500 transition ease-in"
                    strokeWidth={1}
                    onClick={() => removeRole(index)} // Click handler for remove
                  />
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}
