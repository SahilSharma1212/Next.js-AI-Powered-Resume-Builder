"use client";
import React, { useEffect } from "react";
import PersonalDetailsPage from "./@personal-details/page";
import WorkExperiencePage from "./@work-experience/page";
import EducationalDetailsPage from "./@educational-details/page";
import SkillSectionPage from "./@add-skills/page";
import ProjectSectionPage from "./@project-section/page";
import TellUsMorePage from "./@tell-us-more/page";
import SoftSkillsSections from "./@soft-skills/page";


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
  skilllevel,
  setSkilllevel,
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
  softskillname,
  setsoftskillname,
  softskills,
  setsoftskills,
  resumeHasOnceBeenGenerated,
  setResumeHasOnceBeenGenerated,
  course,
  setCourse,
  socials,
  setSocials,
  newSocial,
  setNewSocial,
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
  skilllevel:string;
  setSkilllevel:React.Dispatch<React.SetStateAction<string>>;
  softskillname:string;
  softskills:[];
  setsoftskills:React.Dispatch<React.SetStateAction<string[]>>;
  setsoftskillname:React.Dispatch<React.SetStateAction<string>>;
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
  allSkils: Array<{
    skillname: string;
    skilllevel: string;
  }>;
  setAllSkils: React.Dispatch<
  React.SetStateAction<
    Array<{
      skillname: string;
    skilllevel: string;
    }>
  >
>;
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
  resumeHasOnceBeenGenerated:boolean;
  setResumeHasOnceBeenGenerated:React.Dispatch<React.SetStateAction<boolean>>
  course:string;
  setCourse:React.Dispatch<React.SetStateAction<string>>;
  socials: { socialName: string; socialLink: string }[];
  setSocials: React.Dispatch<React.SetStateAction<{ socialName: string; socialLink: string }[]>>;
  newSocial: { socialName: string; socialLink: string };
  setNewSocial: React.Dispatch<React.SetStateAction<{ socialName: string; socialLink: string }>>;
}) {
  

  useEffect(() => {
    console.log("Updated Qualifications:");
    console.log(
      allQualifications
        .map(q => `- ${q.degreename} in ${q.course} from ${q.institution} (${q.yearofcompletion})`)
        .join("\n") || "No qualifications found."
    );
  }, [allQualifications]);

  useEffect(()=>{;
    console.log("softskills updated")
    console.log(
      softskills.map(s=> `${s.softskillname}`)
    )
  },[softskills])
  
  useEffect(() => {
    console.log("Updated Skills:");
    if (Array.isArray(allSkils)) {
      console.log(
        allSkils.map(s => `- ${s.skillname}: ${s.skilllevel}`).join("\n") || "No skills found."
      );
    } else {
      console.log("Error: allSkils is not an array!", allSkils);
    }
  }, [allSkils]);
  
  
  useEffect(() => {
    console.log("Updated Work Experience:");
    console.log(
      allrole
        .map(role => `- ${role.jobtitle} at ${role.companyname} for ${role.duration}`)
        .join("\n") || "No work experience found."
    );
  }, [allrole]);
  
  useEffect(() => {
    console.log("Updated Projects:");
    console.log(
      allprojects
        .map(project => `- ${project.projectname}: ${project.projectdescription}`)
        .join("\n") || "No projects found."
    );
  }, [allprojects]);
  

  return (
    <div
      className={`text-5xl max-w-screen w-auto p-8 bg-[hsl(0,0%,4%)] text-white rounded-xl flex flex-wrap m-5 justify-start items-center gap-10  shadow-sm shadow-slate-500 min-h-[30rem] min-w-[300px] dark max-sm:p-3 max-sm:m-1 ${
        previewIsOn && "w-[30rem]"
      }`}
    >
      {/* personal details */}

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

      
      {/* educational details */}

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


      
      {/* work experience */}
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

        <SoftSkillsSections
        softskillname={softskillname}
        softskills={softskills}
        setsoftskillname={setsoftskillname}
        setsoftskills={setsoftskills}
        />

        {/* Tell us more */}
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
}
