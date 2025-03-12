"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CircleX } from "lucide-react";
import React from "react";

export default function EducationalDetailsPage({
  degreename,
  setDegreename,
  institution,
  setInstitution,
  yearofcompletion,
  setYearofcompletion,
  course,
  setCourse,
  allQualifications,
  setAllQualifications,
}: {
  degreename: string;
  setDegreename: React.Dispatch<React.SetStateAction<string>>;
  institution: string;
  setInstitution: React.Dispatch<React.SetStateAction<string>>;
  yearofcompletion: string;
  setYearofcompletion: React.Dispatch<React.SetStateAction<string>>;
  allQualifications: Array<{
    degreename: string;
    institution: string;
    yearofcompletion: string;
    course:string;
  }>;
  setAllQualifications: React.Dispatch<
    React.SetStateAction<
      Array<{
        degreename: string;
        institution: string;
        yearofcompletion: string;
        course:string;
      }>
    >
  >;
  course:string;
  setCourse:React.Dispatch<React.SetStateAction<string>>;
}) {


  const addQualification = () => {
    if (degreename !== "" && institution !== "" && yearofcompletion !== ""&&course!=="") {
      setAllQualifications([
        ...allQualifications,
        {
          degreename: degreename,
          institution: institution,
          yearofcompletion: yearofcompletion,
          course:course,
        },
      ]);
      setDegreename("");
      setInstitution("");
      setYearofcompletion("");
      setCourse("");
    } else {
      toast({
        title: "Cannot add empty Qualifications",
        description: "Its time to study dude 🙇🏻‍♂ ! ",
        className: "bg-black text-white border-gray-600",
      });
    }
  };


  const removeQualification = (index: number) => {
    const newQualifications = allQualifications.filter((_, i) => i !== index);
    setAllQualifications(newQualifications);
  };


const { toast } = useToast();

  return (
    <div id="educational-details" className="flex flex-col self-start max-w-96">
      <p className="text-xl">Education Details</p>
      <div>
        <Label htmlFor="DegreeName">Degree Name</Label>
        <Input
          type="text"
          id="DegreeName"
          placeholder="Ex. B.tech"
          value={degreename}
          onChange={(e) => {
            setDegreename(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="CourseName">Course</Label>
        <Input
          type="text"
          id="CourseName"
          placeholder="Ex. Computer Science"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="Institution">Institution</Label>
        <Input
          type="text"
          id="Institution"
          placeholder="Ex. BIT DURG"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="YearOfCompletion">Year Of Completion</Label>
        <Input
          type="text"
          id="YearOfCompletion"
          placeholder="Ex. 2026"
          value={yearofcompletion}
          onChange={(e) => {
            setYearofcompletion(e.target.value);
          }}
        />
      </div>
      <div className=" flex items-center mt-3 gap-2 flex-wrap max-w-full ">
        <Button className="h-12" onClick={addQualification}>
          Add Qualification
        </Button>
        {allQualifications.length > 0 &&
          allQualifications.map((element, index) =>
            element.degreename &&
            element.institution &&
            element.yearofcompletion ? (
              <div key={index} className="flex items-center space-x-2">
                <p className="text-sm bg-white/25 px-2 py-1 rounded-lg flex items-center gap-2">
                  {element.degreename}-{`(${element.course})`}
                  <br />
                  {element.institution}
                  <CircleX
                    className="cursor-pointer text-gray-500 hover:text-red-500 transition ease-in"
                    strokeWidth={1}
                    onClick={() => removeQualification(index)} // Click handler for remove
                  />
                </p>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}
