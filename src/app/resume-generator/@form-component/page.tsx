
"use client";

import React, { FC, useEffect } from "react";
import PersonalDetailsPage from "./@personal-details/page";
import WorkExperiencePage from "./@work-experience/page";
import EducationalDetailsPage from "./@educational-details/page";
import SkillSectionPage from "./@add-skills/page";
import ProjectSectionPage from "./@project-section/page";
import TellUsMorePage from "./@tell-us-more/page";
import SoftSkillsSections from "./@soft-skills/page";

// Define interfaces for data structures

interface Social {
  socialName: string;
  socialLink: string;
}

interface Qualification {
  degreename: string;
  course: string;
  institution: string;
  yearofcompletion: string;
}

interface Skill {
  skillname: string;
  skilllevel: string;
}

interface Project {
  projectname: string;
  projectdescription: string;
}

interface SoftSkill {
  softskillname: string;
}

interface Role {
  jobtitle: string;
  companyname: string;
  duration: string;
}

// Define props interface
interface FormComponentProps {
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
  skilllevel: string;
  setSkilllevel: React.Dispatch<React.SetStateAction<string>>;
  softskillname: string;
  setsoftskillname: React.Dispatch<React.SetStateAction<string>>;
  softskills: SoftSkill[];
  setsoftskills: React.Dispatch<React.SetStateAction<SoftSkill[]>>;
  degreename: string;
  setDegreename: React.Dispatch<React.SetStateAction<string>>;
  institution: string;
  setInstitution: React.Dispatch<React.SetStateAction<string>>;
  yearofcompletion: string;
  setYearofcompletion: React.Dispatch<React.SetStateAction<string>>;
  course: string;
  setCourse: React.Dispatch<React.SetStateAction<string>>;
  companyname: string;
  setCompanyname: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  jobtitle: string;
  setJobtitle: React.Dispatch<React.SetStateAction<string>>;
  allQualifications: Qualification[];
  setAllQualifications: React.Dispatch<React.SetStateAction<Qualification[]>>;
  allSkils: Skill[];
  setAllSkils: React.Dispatch<React.SetStateAction<Skill[]>>;
  allrole: Role[];
  setAllrole: React.Dispatch<React.SetStateAction<Role[]>>;
  projectname: string;
  setProjectname: React.Dispatch<React.SetStateAction<string>>;
  projectdescription: string;
  setProjectdescription: React.Dispatch<React.SetStateAction<string>>;
  allprojects: Project[];
  setAllprojects: React.Dispatch<React.SetStateAction<Project[]>>;
  previewIsOn: boolean;
  setPreviewIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  resumeHasOnceBeenGenerated: boolean;
  setResumeHasOnceBeenGenerated: React.Dispatch<React.SetStateAction<boolean>>;
  socials: Social[];
  setSocials: React.Dispatch<React.SetStateAction<Social[]>>;
  newSocial: Social;
  setNewSocial: React.Dispatch<React.SetStateAction<Social>>;
}

const FormComponent: FC<FormComponentProps> = ({
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
  skilllevel,
  setSkilllevel,
  softskillname,
  setsoftskillname,
  softskills,
  setsoftskills,
  degreename,
  setDegreename,
  institution,
  setInstitution,
  yearofcompletion,
  setYearofcompletion,
  course,
  setCourse,
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
  resumeHasOnceBeenGenerated,
  setResumeHasOnceBeenGenerated,
  socials,
  setSocials,
  newSocial,
  setNewSocial,
}) => {
  useEffect(() => {
    console.log("Updated Qualifications:");
    console.log(
      allQualifications
        .map((q) => `- ${q.degreename} in ${q.course} from ${q.institution} (${q.yearofcompletion})`)
        .join("\n") || "No qualifications found."
    );
  }, [allQualifications]);

  useEffect(() => {
    console.log("softskills updated");
    console.log(
      softskills.map((s) => `- ${s.softskillname}`).join("\n") || "No soft skills found."
    );
  }, [softskills]);

  useEffect(() => {
    console.log("Updated Skills:");
    console.log(
      allSkils.map((s) => `- ${s.skillname}: ${s.skilllevel}`).join("\n") || "No skills found."
    );
  }, [allSkils]);

  useEffect(() => {
    console.log("Updated Work Experience:");
    console.log(
      allrole
        .map((role) => `- ${role.jobtitle} at ${role.companyname} for ${role.duration}`)
        .join("\n") || "No work experience found."
    );
  }, [allrole]);

  useEffect(() => {
    console.log("Updated Projects:");
    console.log(
      allprojects
        .map((project) => `- ${project.projectname}: ${project.projectdescription}`)
        .join("\n") || "No projects found."
    );
  }, [allprojects]);

  return (
    <div
      className={`text-5xl max-w-screen w-auto p-8 bg-[hsl(0,0%,4%)] text-white rounded-xl flex flex-wrap m-5 justify-start items-center gap-10 shadow-sm shadow-slate-500 min-h-[30rem] min-w-[300px] dark max-sm:p-3 max-sm:m-1 ${
        previewIsOn ? "w-[30rem]" : ""
      }`}
    >
      {/* Personal Details */}
      <PersonalDetailsPage
        name={name}
        setName={setName}
        phonenumber={phonenumber}
        setPhonenumber={setPhonenumber}
        email={email}
        setEmail={setEmail}
        yourlocation={yourlocation}
        setYourlocation={setYourlocation}
        socials={socials}
        setSocials={setSocials}
        newSocial={newSocial}
        setNewSocial={setNewSocial}
      />

      {/* Educational Details */}
      <EducationalDetailsPage
        degreename={degreename}
        setDegreename={setDegreename}
        institution={institution}
        setInstitution={setInstitution}
        yearofcompletion={yearofcompletion}
        setYearofcompletion={setYearofcompletion}
        course={course}
        setCourse={setCourse}
        allQualifications={allQualifications}
        setAllQualifications={setAllQualifications}
      />

      {/* Work Experience */}
      <WorkExperiencePage
        companyname={companyname}
        setCompanyname={setCompanyname}
        duration={duration}
        setDuration={setDuration}
        jobtitle={jobtitle}
        setJobtitle={setJobtitle}
        allrole={allrole}
        setAllrole={setAllrole}
      />

      {/* Skills Section */}
      <SkillSectionPage
        allSkils={allSkils}
        setAllSkils={setAllSkils}
        skillname={skillname}
        setSkillName={setSkillName}
        skilllevel={skilllevel}
        setSkilllevel={setSkilllevel}
      />

      {/* Project Section */}
      <ProjectSectionPage
        projectname={projectname}
        setProjectname={setProjectname}
        projectdescription={projectdescription}
        setProjectdescription={setProjectdescription}
        allprojects={allprojects}
        setAllprojects={setAllprojects}
      />

      {/* Soft Skills Section */}
      <SoftSkillsSections
        softskillname={softskillname}
        softskills={softskills}
        setsoftskillname={setsoftskillname}
        setsoftskills={setsoftskills}
      />

      {/* Tell Us More */}
      <TellUsMorePage
        description={description}
        setDescription={setDescription}
        confirmGeneration={confirmGeneration}
        setConfirmGeneration={setConfirmGeneration}
        confirmingGeneration={confirmingGeneration}
        setConfirmingGeneration={setConfirmingGeneration}
        setPreviewIsOn={setPreviewIsOn}
        previewIsOn={previewIsOn}
        resumeHasOnceBeenGenerated={resumeHasOnceBeenGenerated}
        setResumeHasOnceBeenGenerated={setResumeHasOnceBeenGenerated}
      />
    </div>
  );
};

export default FormComponent;