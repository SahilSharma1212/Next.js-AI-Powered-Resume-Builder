export interface ResumeSchema {
  userId: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  yourLocation: string;
  socials: {
    socialName:string;
    socialLink:string;
  }[];
  workExperience: {
    companyname:string;
    duration:string;
    jobtitle:string;
  }[];
  educationalDetails: {
    degreename:string;
    course:string;
    institution:string;
    yearofcompletion:string;
  }[];
  allSkills: {
    skillname:string;
    skilllevel:string;
  }[];
  allProjects: {
    projectname:string;
    projectdescription:string;
  }[];
  softskills: {
    softskillname:string;
  }[];
  description:string;

  role: string;
  templatename:string;
}
