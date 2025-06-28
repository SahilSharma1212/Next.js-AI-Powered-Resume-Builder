"use client"
import React, { FC } from 'react';
import PdfPreview from '../_components/PdfPreview';

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
interface PreviewScreenProps {
  confirmGeneration: boolean;
  setConfirmGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  phonenumber: string;
  email: string;
  yourlocation: string;
  achievements: string;
  description: string;
  allQualifications: Qualification[];
  allSkills: Skill[];
  allrole: Role[];
  allprojects: Project[];
  softskills: SoftSkill[];
  socials: Social[];
}

const PreviewScreen: FC<PreviewScreenProps> = ({
  confirmGeneration,
  setConfirmGeneration,
  name,
  phonenumber,
  email,
  yourlocation,
  achievements,
  description,
  allQualifications,
  allSkills,
  allrole,
  allprojects,
  softskills,
  socials,
}) => {
  return (
    <div className="text-3xl text-red-400 font-bold lg:w-[100rem] sm:w-[50rem] h-full bg-white m-5 rounded-xl border border-gray-500 bg-white/5 p-3">
      <PdfPreview
        confirmGeneration={confirmGeneration}
        setConfirmGeneration={setConfirmGeneration}
        name={name}
        phonenumber={phonenumber}
        email={email}
        yourlocation={yourlocation}
        achievements={achievements}
        description={description}
        allQualifications={allQualifications}
        allSkills={allSkills}
        allrole={allrole}
        allprojects={allprojects}
        softskills={softskills}
        socials={socials}
      />
    </div>
  );
};

export default PreviewScreen;