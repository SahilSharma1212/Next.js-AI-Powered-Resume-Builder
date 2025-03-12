"use client";

import { useToast } from "../../../hooks/use-toast";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CircleX, Wand } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FormComponent({
  confirmGeneration,
  setConfirmGeneration,
  confirmingGeneration,
  setConfirmingGeneration,
  name,
  setName,
  phonenumber,
  setPhonenumber,
  email,
  setEmail,
  yourlocation,
  setYourlocation,
  description,
  setDescription,
  skillname,
  setSkillName,
  degreename,
  setDegreename,
  institution,
  setInstitution,
  yearofcompletion,
  setYearofcompletion,
  companyname,
  setCompanyname,
  duration,
  setDuration,
  jobtitle,
  setJobtitle,
  allQualifications,
  setAllQualifications,
  allSkils,
  setAllSkils,
  allrole,
  setAllrole,
  projectname,
  setProjectname,
  projectdescription,
  setProjectdescription,
  allprojects,
  setAllprojects,
  previewIsOn,
  setPreviewIsOn,
}: {
  confirmGeneration: boolean;
  setConfirmGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  confirmingGeneration: boolean;
  setConfirmingGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  phonenumber: string;
  setPhonenumber: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  yourlocation: string;
  setYourlocation: React.Dispatch<React.SetStateAction<string>>;
  achievements: string;
  setAchievements: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  skillname: string;
  setSkillName: React.Dispatch<React.SetStateAction<string>>;
  degreename: string;
  setDegreename: React.Dispatch<React.SetStateAction<string>>;
  institution: string;
  setInstitution: React.Dispatch<React.SetStateAction<string>>;
  yearofcompletion: string;
  setYearofcompletion: React.Dispatch<React.SetStateAction<string>>;
  companyname: string;
  setCompanyname: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  jobtitle: string;
  setJobtitle: React.Dispatch<React.SetStateAction<string>>;
  allQualifications: Array<{
    degreename: string;
    institution: string;
    yearofcompletion: string;
  }>;
  setAllQualifications: React.Dispatch<
    React.SetStateAction<
      Array<{
        degreename: string;
        institution: string;
        yearofcompletion: string;
      }>
    >
  >;
  allSkils: string[];
  setAllSkils: React.Dispatch<React.SetStateAction<string[]>>;
  allrole: Array<{ companyname: string; duration: string; jobtitle: string }>;
  setAllrole: React.Dispatch<
    React.SetStateAction<
      Array<{ companyname: string; duration: string; jobtitle: string }>
    >
  >;
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
  previewIsOn: boolean;
  setPreviewIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { toast } = useToast();

  useEffect(() => {
    console.log("Updated Qualifications:");
    if (allQualifications?.length) {
      allQualifications.forEach((q, index) => {
        console.log(`  ${index + 1}. Degree: ${q.degreename}, Institution: ${q.institution}, Year: ${q.yearofcompletion}`);
      });
    } else {
      console.log("  No qualifications found.");
    }
  }, [allQualifications]);
  
  useEffect(() => {
    console.log("Updated Skills:");
    if (allSkills?.length) {
      console.log("  Skills List:", allSkills.join(", "));
    } else {
      console.log("  No skills found.");
    }
  }, [allSkills]);
  
  useEffect(() => {
    console.log("Updated Work Experience:");
    if (allrole?.length) {
      allrole.forEach((role, index) => {
        console.log(`  ${index + 1}. ${role.jobtitle} at ${role.companyname} for ${role.duration}`);
      });
    } else {
      console.log("  No work experience found.");
    }
  }, [allrole]);
  
  useEffect(() => {
    console.log("Updated Projects:");
    if (allprojects?.length) {
      allprojects.forEach((project, index) => {
        console.log(`  ${index + 1}. ${project.projectname}: ${project.projectdescription}`);
      });
    } else {
      console.log("  No projects found.");
    }
  }, [allprojects]);
  


  const addQualification = () => {
    if (degreename !== "" && institution !== "" && yearofcompletion !== "") {
      setAllQualifications([
        ...allQualifications,
        {
          degreename: degreename,
          institution: institution,
          yearofcompletion: yearofcompletion,
        },
      ]);
      setDegreename("");
      setInstitution("");
      setYearofcompletion("");
    } else {
      toast({
        title: "Cannot add empty Qualifications",
        description: "Its time to study dude 🙇🏻‍♂ ! ",
        className: "bg-black text-white border-gray-600",
      });
    }
  };


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


  const addRole = () => {
    if (companyname && duration && jobtitle) {
      setAllrole([...allrole, { companyname, duration, jobtitle }]);
      setCompanyname("");
      setDuration("");
      setJobtitle("");
    }
  };


  const addSkill = () => {
    if (skillname !== "") {
      setAllSkils([...allSkils, skillname]);
      setSkillName("");
    } else {
      toast({
        title: "Cannot add empty Skill",
        description: "Who would want you without any skill ? 🤭",
        className: "bg-black text-white border-gray-600",
      });
    }
  };


  // Function to remove a qualification by index


  const removeQualification = (index:number) => {
    const newQualifications = allQualifications.filter((_, i) => i !== index);
    setAllQualifications(newQualifications);
  };

  const removeProject = (index:number) => {
    const newprojects = allprojects.filter((_, i) => i !== index);
    setAllprojects(newprojects);
  };

  const removeRole = (index: number) => {
    const newRoles = allrole.filter((_, i) => i !== index);
    setAllrole(newRoles);
  };


  const removeSkill = (index:number) => {
    const newSkills = allSkils.filter((_, i) => i !== index);
    setAllSkils(newSkills);
  };


  return (
    
      
      <div
        className={`text-5xl max-w-screen w-auto p-8 bg-[hsl(0,0%,4%)] text-white rounded-xl flex flex-wrap m-5 justify-start items-center gap-10  shadow-sm shadow-slate-500 min-h-[30rem] min-w-[300px] dark max-sm:p-3 max-sm:m-1 ${
          previewIsOn && "w-[30rem]"
        }`}
      >
        {/* personal details */}

        <div id="personal-details" className="flex flex-col self-start">
        <div className="text-xl ">Personal Details</div>
        <div>
          <Label htmlFor="name" className="text-sm">
            Name
          </Label>
          <Input
            type="text"
            id="Name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <Label htmlFor="PhoneNumber" className="text-sm">Phone no.</Label>
          <Input
            type="text"
            id="PhoneNumber"
            placeholder="Phone no."
            value={phonenumber}
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />
        </div>

        <div>
          <Label htmlFor="YourLocation" className="text-sm">Your Location</Label>
          <Input
            type="text"
            id="YourLocation"
            placeholder="State , City"
            value={yourlocation}
            onChange={(e) => {
              setYourlocation(e.target.value);
            }}
          />
        </div>
      </div>
{/* work experience */}
<div
        id="educational-details"
        className="flex flex-col self-start max-w-96"
      >
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
            placeholder="MM/YY - MM/YY"
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

      {/* educational details */}

      <div
        id="educational-details"
        className="flex flex-col self-start max-w-96"
      >
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
                    {element.degreename}-{element.yearofcompletion}
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

    {/* bottom 3 sections */}

        <div
          className={`flex w-full justify-start gap-y-10 max-lg:flex-wrap items-start ${
            previewIsOn && "flex-col"
          }`}
        >
          {/* Skills Section */}
          <div
      id="skills-section"
      className="flex flex-col self-start w-full max-w-[45rem]"
    >
      <p className="text-xl sm:text-lg font-semibold">Skills</p>
      <div>
        <Label htmlFor="skills">Skills</Label>
        <Input
          placeholder="Ex. Python Programming"
          value={skillname}
          onChange={(e) => {
            setSkillName(e.target.value);
          }}
        />
        <div className="flex flex-wrap gap-2 mt-2 ">
          <Button
            className="text-black text-sm bg-white hover:bg-gray-200  px-3 h-12 rounded-md"
            onClick={addSkill}
          >
            Add Skill
          </Button>
          {allSkils.map((skill, index) => (
            <p
              key={index}
              className="text-sm rounded-lg px-2 py-2 bg-white/10 text-white flex gap-1 items-center"
            >
              {skill}{" "}
              <CircleX
                strokeWidth={1}
                size={18}
                className="text-gray-400 hover:text-red-500 transition"
                onClick={() => {
                  removeSkill(index);
                }}
              />
            </p>
          ))}
        </div>
      </div>
    </div>

          {/* Project Section */}
          <div
      id="projects-section"
      className="flex flex-col self-start w-full max-w-[45rem]"
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

          {/* Tell us more */}
          <div className="w-full max-w-[45rem] flex flex-col">
      <p className="text-xl sm:text-lg font-semibold">
        Tell us more about yourself
      </p>

      <div className="w-full">
        <Label htmlFor="description">Make your response more specific</Label>
        <Textarea
          placeholder="Enter any specific descriptions about how you want your resume to have"
          id="message"
          className="w-full min-h-[8rem]"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <Button
          className="h-12 text-base items-center"
          onClick={() => {
            setConfirmingGeneration(true);
          }}
        >
          Generate <Wand />
        </Button>

        {confirmingGeneration && (
          <div
            className={`flex items-center transition translate-y-0 gap-4 ${
              confirmingGeneration && "opacity-100"
            }`}
          >
            <Button
              className="bg-green-500/10 hover:bg-green-500/30 text-white"
              onClick={() => {
                setConfirmingGeneration(false);
                setConfirmGeneration(true);
              }}
            >
              Confirm{" "}
            </Button>
            <Button
              className="bg-red-500/10 hover:bg-red-600/30 text-white"
              onClick={() => {
                setConfirmingGeneration(false);
              }}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>


          <Button
            onClick={() => {
              setPreviewIsOn((prevIsOn) => {
                const newPreviewIsOn = !prevIsOn;
                console.log("preview is on ", newPreviewIsOn); // Correct value here
                return newPreviewIsOn;
              });
            }}
          >
            Turn on Preview
          </Button>
        </div>
      </div>
      

  );
}
