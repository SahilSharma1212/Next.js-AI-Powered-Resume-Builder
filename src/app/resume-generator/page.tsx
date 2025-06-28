"use client";

import React, { FC, useState } from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import FormComponent from "./@formcomponent/page";
import PreviewScreen from "./@previewscreen/page";


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

const SpotlightNewDemo: FC = () => {
  const [confirmGeneration, setConfirmGeneration] = useState<boolean>(false);
  const [confirmingGeneration, setConfirmingGeneration] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [yourlocation, setYourlocation] = useState<string>("");
  const [achievements, setAchievements] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [skillname, setSkillName] = useState<string>("");
  const [skilllevel, setSkilllevel] = useState<string>("");
  const [degreename, setDegreename] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");
  const [yearofcompletion, setYearofcompletion] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [companyname, setCompanyname] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [jobtitle, setJobtitle] = useState<string>("");
  const [projectname, setProjectname] = useState<string>("");
  const [projectdescription, setProjectdescription] = useState<string>("");
  const [allprojects, setAllprojects] = useState<Project[]>([]);
  const [allQualifications, setAllQualifications] = useState<Qualification[]>([]);
  const [allSkils, setAllSkils] = useState<Skill[]>([]);
  const [allrole, setAllrole] = useState<Role[]>([]);
  const [softskillname, setsoftskillname] = useState<string>("");
  const [softskills, setsoftskills] = useState<SoftSkill[]>([]);
  const [previewIsOn, setPreviewIsOn] = useState<boolean>(false);
  const [resumeHasOnceBeenGenerated, setResumeHasOnceBeenGenerated] = useState<boolean>(false);
  const [socials, setSocials] = useState<Social[]>([]);
  const [newSocial, setNewSocial] = useState<Social>({ socialName: "", socialLink: "" });

  return (
    <>
      <div
        className={`min-h-screen w-full rounded-md flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ${
          previewIsOn ? "flex items-start max-sm:flex-col max-md:flex-col" : "flex-col md:items-center"
        }`}
      >
        <Spotlight />
        <FormComponent
          confirmGeneration={confirmGeneration}
          setConfirmGeneration={setConfirmGeneration}
          confirmingGeneration={confirmingGeneration}
          setConfirmingGeneration={setConfirmingGeneration}
          name={name}
          setName={setName}
          phonenumber={phonenumber}
          setPhonenumber={setPhonenumber}
          email={email}
          setEmail={setEmail}
          yourlocation={yourlocation}
          setYourlocation={setYourlocation}
          achievements={achievements}
          setAchievements={setAchievements}
          description={description}
          setDescription={setDescription}
          skillname={skillname}
          setSkillName={setSkillName}
          skilllevel={skilllevel}
          setSkilllevel={setSkilllevel}
          degreename={degreename}
          setDegreename={setDegreename}
          institution={institution}
          setInstitution={setInstitution}
          yearofcompletion={yearofcompletion}
          setYearofcompletion={setYearofcompletion}
          course={course}
          setCourse={setCourse}
          companyname={companyname}
          setCompanyname={setCompanyname}
          duration={duration}
          setDuration={setDuration}
          jobtitle={jobtitle}
          setJobtitle={setJobtitle}
          allQualifications={allQualifications}
          setAllQualifications={setAllQualifications}
          allSkils={allSkils}
          setAllSkils={setAllSkils}
          allrole={allrole}
          setAllrole={setAllrole}
          projectname={projectname}
          setProjectname={setProjectname}
          projectdescription={projectdescription}
          setProjectdescription={setProjectdescription}
          allprojects={allprojects}
          setAllprojects={setAllprojects}
          previewIsOn={previewIsOn}
          setPreviewIsOn={setPreviewIsOn}
          softskillname={softskillname}
          setsoftskillname={setsoftskillname}
          softskills={softskills}
          setsoftskills={setsoftskills}
          resumeHasOnceBeenGenerated={resumeHasOnceBeenGenerated}
          setResumeHasOnceBeenGenerated={setResumeHasOnceBeenGenerated}
          socials={socials}
          setSocials={setSocials}
          newSocial={newSocial}
          setNewSocial={setNewSocial}
        />

        {previewIsOn && (
          <PreviewScreen
            confirmGeneration={confirmGeneration}
            setConfirmGeneration={setConfirmGeneration}
            name={name}
            phonenumber={phonenumber}
            email={email}
            yourlocation={yourlocation}
            achievements={achievements}
            description={description}
            allQualifications={allQualifications}
            allSkills={allSkils}
            allrole={allrole}
            allprojects={allprojects}
            softskills={softskills}
            socials={socials}
          />
        )}
      </div>
    </>
  );
};

export default SpotlightNewDemo;
export const dynamic = "force-dynamic";