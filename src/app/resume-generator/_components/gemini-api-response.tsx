import React, { useState, useEffect, FC } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import OrangeAndBeige from "@/components/orangeAndBeige";
import SubtleDarkBlue from "@/components/SubtleDarkBlue";
import BasicMonochrome from "@/components/basicColored";
import { useSearchParams } from "next/navigation";

// Define interfaces for all data structures

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

interface ResumeResponse {
  "name": { "first": "", "last": "" }
  email: string;
  phone: string;
  yourLocation: string;
  socials: Social[];
  workExperience: Role[];
  educationalDetails: Qualification[];
  allSkills: Skill[];
  allProjects: Project[];
  softskills: SoftSkill[];
  description: string;
  role: string;
}

// Define props interface
interface GeminiResponseProps {
  confirmGeneration: boolean;
  setConfirmGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  phonenumber: string;
  email: string;
  yourlocation: string;
  description: string;
  allQualifications?: Qualification[];
  allSkills?: Skill[];
  allrole?: Role[];
  allprojects?: Project[];
  softskills?: SoftSkill[];
  socials?: Social[];
  setGeneratedResume: React.Dispatch<React.SetStateAction<ResumeResponse | null>>;
}


// Define template component type
type TemplateComponent = FC<{ response: ResumeResponse  }>;

// Template mapping with type safety
const templatesMap: Record<string, TemplateComponent> = {
  OrangeAndBeige,
  SubtleDarkBlue,
  BasicMonochrome,
};

const GeminiResponse: FC<GeminiResponseProps> = ({
  confirmGeneration,
  setConfirmGeneration,
  name,
  phonenumber,
  email,
  yourlocation,
  description,
  allQualifications = [],
  allSkills = [],
  allrole = [],
  allprojects = [],
  softskills = [],
  socials = [],
  setGeneratedResume,
}) => {
  const searchParams = useSearchParams();
  const template = searchParams.get("template") ?? "OrangeAndBeige";
  const SelectedTemplate = templatesMap[template] ?? OrangeAndBeige;

  const [response, setResponse] = useState<ResumeResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const prompt = `Generate a professional, ATS-friendly resume in the following JSON format. 
        **Return only the JSON output, no extra words or characters**.
    
        Name: ${JSON.stringify(name)}
        
        if there is a single word as name then set the first: as the name and second as an empty string , and also segregate names into first and last if someone has 3 names or more than 2 names in their name

        Phone: ${phonenumber}
        Email: ${email}
        Location: ${yourlocation}
        Description: ${description}
        (the description should be at least 30 words long describing myself about what I do based on the information given)
        
        Socials:
        ${socials.map((s) => `- ${s.socialName} : ${s.socialLink}`).join("\n")}
    
        Projects:
        ${allprojects
          .map((ap) => `- ${ap.projectname}: ${ap.projectdescription}`)
          .join("\n")}
          (also enlarge project description at least 30 words which explains the details that I have not mentioned in detail or left it out)
    
        Skills:
        ${allSkills
          .map((skill) => `- ${skill.skillname} (${skill.skilllevel})`)
          .join("\n")}

        Soft Skills:
        ${softskills.map((skill) => `- ${skill.softskillname}`).join("\n")}
    
        Qualifications:
        ${allQualifications
          .map(
            (q) =>
              `- ${q.degreename} in ${q.course} from ${q.institution} (${q.yearofcompletion})`
          )
          .join("\n")}
          (identify and return the full form of degree name example for BTech return Bachelor of Technology and respectively)
    
        Work Experience:
        ${allrole
          .map(
            (role) =>
              `- ${role.jobtitle} at ${role.companyname} for ${role.duration}`
          )
          .join("\n")}

        also on the basis of the details, predict what role I'm applying for and include it in response
    
        Expected JSON output:
        {
          "name": { "first": "", "last": "" },
          "email": "",
          "phone": "",
          "yourLocation": "",
          "socials": [{"socialName": "", "socialLink": ""}],
          "workExperience": [{ "companyname": "", "duration": "", "jobtitle": "" }],
          "educationalDetails": [{ "degreename": "", "course": "", "institution": "", "yearofcompletion": "" }],
          "allSkills": [{ "skillname": "", "skilllevel": "" }],
          "allProjects": [{ "projectname": "", "projectdescription": "" }],
          "softskills": [{ "softskillname": "" }],
          "description": "",
          "role": ""
        }`;

  useEffect(() => {
    if (!confirmGeneration) return;

    async function fetchData() {
      setLoading(true);
      setError(null);
      setResponse(null);

      try {
        const genAI = new GoogleGenerativeAI(
          process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? ""
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const rawText =
          result.response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";

        const jsonResponse: ResumeResponse = JSON.parse(
          rawText.replace(/```json|```/g, "").trim()
        );
        setResponse(jsonResponse);
        setGeneratedResume(jsonResponse);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError("Failed to fetch resume. Please try again.");
        toast({
          variant: "destructive",
          title: "Error generating resume.",
          description: errorMessage,
        });
      } finally {
        setLoading(false);
        setConfirmGeneration(false);
      }
    }

    fetchData();
  }, [
    confirmGeneration,
    setConfirmGeneration,
    setGeneratedResume,
    prompt,
  ]);

  return (
    <div className="w-full bg-slate-200 flex justify-center items-center min-h-[297mm] rounded-3xl">
      {loading ? (
        <Skeleton className="w-full h-10 rounded-md" />
      ) : error ? (
        <p className="text-black">{error}</p>
      ) : response ? (
        <SelectedTemplate response={response} />
      ) : null}
    </div>
  );
};

export default GeminiResponse;