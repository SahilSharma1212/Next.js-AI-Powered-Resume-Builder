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
  Link,
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

// Define props interface

export default function OrangeAndBeige({ response = {} as ResumeResponse }) {
  const socialIcons: Record<string, JSX.Element> = {
    facebook: <Facebook size={17} />,
    instagram: <Instagram size={17} />,
    linkedin: <Linkedin size={17} />,
    twitter: <Twitter size={17} />,
    github: <Github size={17} />,
    website: <Earth size={17} />,
  };

  return (
    <div
      className="resume-container border rounded-lg min-h-[297mm] h-auto w-full flex font-serif"
      style={{
        background: "linear-gradient(to right, #fcf8e1 30%, white 30%)",
      }}
    >
      <div className="max-w-[30%] h-full text-white text-sm" style={{ width: "30%" }}>
        <div className="bg-red-400 p-5 py-10">
          <div className="text-3xl">
            <p contentEditable>
              {response.name.first} <br/>
              {response.name.last} <br/>
            </p>
            <p className="text-lg font-thin" contentEditable>
              {response.role}
            </p>
            <div className="flex flex-col gap-1 mt-3">
              <p className="font-thin flex gap-2" contentEditable>
                <Mail size={17} />
                <span className="text-xs">{response.email}</span>
              </p>
              <p className="font-thin flex gap-2" contentEditable>
                <Phone size={17} />
                <span className="text-sm">{response.phone}</span>
              </p>
              {response.socials?.map((social, index) => {
                const socialKey = social.socialName.toLowerCase();
                return (
                  <p key={index} className="flex items-center gap-2">
                    {socialIcons[socialKey] || <Globe size={17} className="text-gray-500" />}
                    <a href={social.socialLink} target="_blank" className="text-sm font-thin flex gap-1 items-center">
                      {social.socialName} <Link size={13} />
                    </a>
                  </p>
                );
              })}
              <p className="font-thin flex gap-2" contentEditable>
                <MapPin size={17} />
                <span className="text-sm">{response.yourLocation}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-black p-3">
          <p className="text-xl font-thin">Education</p>
          <div contentEditable>
            {response.educationalDetails?.map((edu, index) => (
              <div key={index} contentEditable className="mt-2">
                <p className="text-lg font-thin">{edu.degreename}</p>
                <p className="text-sm font-thin">in {edu.course}</p>
                <p className="text-red-400 font-semibold flex gap-2 mt-1">
                  <MapPin size={17} />
                  {edu.institution}
                </p>
                <p className="flex gap-2 items-center">
                  <Timer size={17} />
                  {edu.yearofcompletion}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-black p-3">
          <h2 className="mt-2 text-xl font-thin">Skills:</h2>
          <ul>
            {response.allSkills?.map((skill, index: number) => (
              <li key={index} className="my-2 font-thin" contentEditable>
                {skill.skillname} - {skill.skilllevel}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 py-10 h-full text-black text-sm" style={{ width: "70%" }}>
        <div className="font-thin" contentEditable>
          <p className="text-lg text-red-400">Hey everyone!</p>
          <hr className="my-2" />
          {response.description}
        </div>

        <div>
          <h2 className="text-2xl mt-6 font-thin">Work Experience:</h2>
          <ul>
            {response.workExperience?.map((job, index: number) => (
              <div key={index} contentEditable>
                <p className="text-lg font-thin mt-2">{job.jobtitle}:</p>
                <p className="text-red-400 font-thin">at {job.companyname}</p> <p className="font-thin">({job.duration})</p>
              </div>
            ))}
          </ul>
        </div>

        <div className="text-black mt-6">
          <h2 className="mt-2 font-thin text-2xl">Projects:</h2>
          {response.allProjects?.map((proj, index: number) => (
            <div key={index} contentEditable className="mt-2">
              <p className="font-thin text-lg">{proj.projectname}:</p>
              <p className="font-thin">{proj.projectdescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
