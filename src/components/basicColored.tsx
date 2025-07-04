import React, { FC } from "react";
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
interface ProfessionalResumeProps {
  response?: ResumeResponse;
}

// Define social icons type
type SocialIconName = "facebook" | "instagram" | "linkedin" | "twitter" | "github" | "website";

const ProfessionalResume: FC<ProfessionalResumeProps> = ({ response = {} as ResumeResponse }) => {
  const socialIcons: Record<SocialIconName, React.ReactNode> = {
    facebook: <Facebook size={17} />,
    instagram: <Instagram size={17} />,
    linkedin: <Linkedin size={17} />,
    twitter: <Twitter size={17} />,
    github: <Github size={17} />,
    website: <Earth size={17} />,
  };

  return (
    <div className="w-full min-h-[297mm] mx-auto h-full bg-white border shadow-lg flex flex-col font-sans">
      {/* Header */}
      <div className="text-center border-b pb-4 bg-[#141414] font-bold text-white py-4">
        <h1 className="text-5xl w-full font-thin pb-2">
          {response.name?.first || "First"} {response.name?.last || "Last"}
        </h1>
        <p className="text-lg font-semibold">
          {response.role || "Software Quality Engineer"}
        </p>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6 font-semibold text-base flex flex-col">
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-700">CONTACT</h2>
            <hr className="my-2 border-gray-300" />
            <p className="flex items-center gap-2 text-gray-700">
              <Mail size={17} />
              <span className="text-xs py-1">
                {response.email || "your@email.com"}
              </span>
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Phone size={17} /> {response.phone || "123-456-7890"}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin size={17} /> {response.yourLocation || "City, Country"}
            </p>
            {response.socials?.map((social, index) => (
              <p key={index} className="text-gray-700 flex items-center gap-2">
                {socialIcons[social.socialName.toLowerCase() as SocialIconName] || (
                  <Globe size={17} className="text-gray-500" />
                )}
                <span className="flex gap-1 items-center text-base">
                  {social.socialName}
                </span>
              </p>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h2 className="mt-6 text-xl font-bold text-gray-700">EDUCATION</h2>
            <hr className="my-2 border-gray-300" />
            {(response.educationalDetails || []).map((edu, index) => (
              <div key={index} className="mt-4">
                <p className="text-gray-600 font-bold text-lg">
                  {edu.degreename || "Degree Name"}{" "}
                  <span className="text-sm font-medium">
                    in {edu.course || "Course Name"}
                  </span>
                </p>
                <p className="text-gray-600 text-sm">
                  {edu.institution || "Institution"} (
                  {edu.yearofcompletion || "Year"})
                </p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="mt-6 text-lg font-bold text-gray-700">SKILLS</h2>
            <hr className="my-2 border-gray-300" />
            <ul className="list-disc pl-5 text-gray-700">
              {(response.allSkills || []).map((skill, index) => (
                <li key={index}>{skill.skillname || "Skill Name"}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="w-2/3 p-6 flex-1">
          {/* Introduction */}
          <div className="text-sm">
            <h2 className="text-xl font-bold text-gray-800">Hi It&apos;s me</h2>
            <hr className="my-2 border-gray-300" />
            <p className="text-gray-600 text-sm font-medium">
              {response.description || "No description provided."}
            </p>
          </div>

          {/* Work Experience */}
          <div className="text-sm mt-6">
            <h2 className="text-xl font-bold text-gray-800">WORK EXPERIENCE</h2>
            <hr className="my-1 border-gray-300" />
            <div className="flex justify-start gap-5">
              {(response.workExperience || []).map((job, index) => (
                <div
                  key={index}
                  className="mt-2 p-2 rounded-lg border inline-block"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {job.jobtitle || "Job Title"}
                  </p>
                  <p className="text-gray-600 text-sm font-medium">
                    {job.companyname || "Company"} ({job.duration || "Duration"})
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="text-sm mt-6">
            <h2 className="text-xl font-bold text-gray-800">Projects</h2>
            <hr className="my-2 border-gray-300" />
            {(response.allProjects || []).map((proj, index) => (
              <div key={index} contentEditable className="mt-2">
                <p className="font-medium text-gray-800 text-base">
                  {proj.projectname || "Project Name"}:
                </p>
                <p className="font-medium text-gray-600 text-sm">
                  {proj.projectdescription || "No description provided."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResume;