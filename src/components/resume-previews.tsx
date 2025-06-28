
export interface Template {
  _id: string;
  userId: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  yourLocation: string;
  socials: {
    socialName: string;
    socialLink: string;
  }[];
  workExperience: {
    companyname: string;
    duration: string;
    jobtitle: string;
  }[];
  educationalDetails: {
    degreename: string;
    course: string;
    institution: string;
    yearofcompletion: string;
  }[];
  allSkills: {
    skillname: string;
    skilllevel: string;
  }[];
  allProjects: {
    projectname: string;
    projectdescription: string;
  }[];
  softskills: {
    softskillname: string;
  }[];
  description: string;
  role: string;
  templatename: string;
}

export function SubtleDarkBluePreview({ oneTemplate }: { oneTemplate: Template }) {
  return (
    <div className="h-full w-full flex">
      {/* Left Blue Section with Vertical Text */}
      <div className="w-[30%] flex bg-blue-950 flex-col items-center justify-center">
        <p
          className="text-white text-xl tracking-wider"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {oneTemplate.role}
        </p>
      </div>

      {/* Name Section */}
      <div className="w-[70%] p-4">
        <span className="text-lg">
          {oneTemplate.name.first} {oneTemplate.name.last}
        </span>
        <br />
        <span className="text-sm">({oneTemplate.phone})</span>
      </div>
    </div>
  );
}

export function OrangeAndBeigePreview({ oneTemplate }: { oneTemplate: Template }) {
  return (
    <div className="h-full w-full flex">
      <div className="w-[30%] flex bg-[#fcf8e1] flex-col">
        <div className="h-[40%] bg-red-400"></div>
      </div>
      <div className="p-4 text-lg">
        {oneTemplate.name.first} {oneTemplate.name.last}
      </div>
    </div>
  );
}

export function BasicMonochromePreview({ oneTemplate }: { oneTemplate: Template }) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[20%] bg-[#141414] flex items-center text-white justify-center">
        <span className="text-lg">{oneTemplate.role}</span>
      </div>
      <div className="h-[80%] flex justify-center items-start pt-3">
        {oneTemplate.name.first} {oneTemplate.name.last}
      </div>
    </div>
  );
}