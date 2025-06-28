import React, { JSX } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Earth,
  Globe,
  Timer,
} from "lucide-react";


// Define interfaces for data structures
interface Name {
  first: string;
  last: string;
}

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

interface Role {
  jobtitle: string;
  companyname: string;
  duration: string;
}

interface ResumeResponse {
  name: Name;
  email: string;
  phone: string;
  yourLocation: string;
  socials: Social[];
  workExperience: Role[];
  educationalDetails: Qualification[];
  allSkills: Skill[];
  allProjects: Project[];
  softskills: { softskillname: string }[];
  description: string;
  role: string;
}



export default function SubtleDarkBlue({ response = {} as ResumeResponse }) {
  const socialIcons: Record<string, JSX.Element> = {
    facebook: <Facebook size={17} />,
    instagram: <Instagram size={17} />,
    linkedin: <Linkedin size={17} />,
    twitter: <Twitter size={17} />,
    github: <Github size={17} />,
    website: <Earth size={17} />,
  };

  return (
    <div className="resume-container border rounded-lg min-h-[297mm] h-auto w-full flex font-serif bg-white text-black">
      <div className="w-1/3 bg-gray-900 text-white pl-4 pt-6">
        <div className="text-3xl">
          <p contentEditable>
            <span className="font-light">{response.name.first}</span> <br />
            <span className="font-light">{response.name.last}</span> <br />
          </p>
          <p className="text-lg font-thin mt-2" contentEditable>
            {response.role}
          </p>
        </div>
        <h2 className="text-lg font-thin mt-6">Contacts</h2>
        <hr className="mt-2 mr-4 text-slate-600" />
        <div className="mt-3">
          <p className="flex gap-2 items-center py-1 break-all" contentEditable>
            <Mail size={17} />
            <span className="text-sm font-thin">{response.email}</span>
          </p>

          <p className="flex gap-2 items-center py-2" contentEditable>
            <Phone size={17} />{" "}
            <span className="text-base font-thin">{response.phone}</span>
          </p>
          {response.socials?.map((social, index: number) => (
            <p key={index} className="flex items-center gap-2">
              {socialIcons[social.socialName.toLowerCase()] || (
                <Globe size={17} className="text-gray-500" />
              )}
              <span
                className="font-thin flex gap-1 items-center text-base"
              >
                {social.socialName}
              </span>
            </p>
          ))}
          <p className="flex gap-2 items-center py-2" contentEditable>
            <MapPin size={17} />{" "}
            <span className="text-base font-thin">{response.yourLocation}</span>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-thin">Education</h2>
          <hr className="mt-2 mr-4 text-slate-600" />
          {response.educationalDetails?.map((edu, index: number) => (
            <div key={index} className="mt-4" contentEditable>
              <p className="text-lg font-thin my-2 ">{edu.degreename}</p>
              <p className="text-sm font-thin my-2 ">in {edu.course}</p>
              <p className="flex gap-2  my-2 text-base items-center font-thin">
                <MapPin size={13} className="text-gray-200" /> {edu.institution}
              </p>
              <p className="flex gap-2 items-center text-base font-thin">
                <Timer size={13} className="text-gray-200" />{" "}
                {edu.yearofcompletion}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-thin">Skills</h2>
          <hr className="mt-2 mr-4 text-slate-600" />
          {response.allSkills?.map((skill, index: number) => (
            <li key={index} className="my-2 font-thin text-sm" contentEditable>
              {skill.skillname} - {skill.skilllevel}
            </li>
          ))}
        </div>
      </div>
      <div className="w-2/3 p-6">
        <div className="font-thin" contentEditable>
          <p className="text-2xl text-gray-600">About me !</p>
          <hr className="my-2" />
          <p className="text-sm">{response.description}</p>
        </div>
        <div className="mt-3">
          <h2 className="text-2xl font-thin text-gray-600">Work Experience</h2>
          {response.workExperience?.map((job, index: number) => (
            <div key={index} contentEditable>
              <p className="text-lg font-thin mt-2">{job.jobtitle}:</p>
              <p className="text-gray-600 font-thin text-base">
                at {job.companyname} ({job.duration})
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-thin text-gray-600">Projects</h2>
          {response.allProjects?.map((proj, index: number) => (
            <div key={index} contentEditable className="mt-2">
              <p className="font-medium text-gray-600 text-base">
                {proj.projectname}:
              </p>
              <p className="font-thin  text-sm">{proj.projectdescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
