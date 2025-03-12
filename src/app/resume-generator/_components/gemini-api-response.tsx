import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import OrangeAndBeige from "@/components/orangeAndBeige";
import SubtleDarkBlue from "@/components/SubtleDarkBlue";
import { useSearchParams } from "next/navigation";
import BasicMonochrome from "@/components/basicColored";

export default function GeminiResponse({
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
  setGeneratedResume, // ✅ New prop for updating state
}) {
  const searchParams = useSearchParams();
  const template = searchParams.get("template");

  // Mapping template names to components
  const templatesMap: Record<string, React.FC<{ response: any }>> = {
    OrangeAndBeige: OrangeAndBeige,
    SubtleDarkBlue: SubtleDarkBlue,
    BasicMonochrome: BasicMonochrome,
  };

  const SelectedTemplate = templatesMap[template as string] || OrangeAndBeige; // Default to OrangeAndBeige if not found

  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const prompt = `Generate a professional, ATS-friendly resume in the following JSON format. 
        **Return only the JSON output, no extra words or characters**.
    
        Name: ${name}
        
        if there is a single word as name then set the first: as the name and second as an empty string , and also segregate names into first and last if someone has 3 names or more than 2 names in their name

        Phone: ${phonenumber}
        Email: ${email}
        Location: ${yourlocation}
        Description: ${description}
        (the description should be atleast 30 words long describing myself about what i do based on the information given)
        
        Socials:
        ${socials.map((s) => `- ${s.socialName} : ${s.socialLink}`).join("\n")}
    
        Projects:
        ${allprojects
          .map((ap) => `- ${ap.projectname}: ${ap.projectdescription}`)
          .join("\n")}
          (also enlarge project description atleast 30 words which explains the details that i have not mentioned in detail or left it out)
    
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
          (identify and return the fullform of degree name example for btech return Bachelor in Technology and respectively)
    
        Work Experience:
        ${allrole
          .map(
            (role) =>
              `- ${role.jobtitle} at ${role.companyname} for ${role.duration}`
          )
          .join("\n")}

        also on the basis of the details , predict what role the im applying for and include it in response
    
        Expected JSON output:
        {
          "name": { "first": "", "last": "" },
          "email": "",
          "phone": "",
          "yourLocation": "",
          "socials":[{"socialName":"","socialLink:""}]
          "workExperience": [{ "companyname": "", "duration": "", "jobtitle": "" }],
          "educationalDetails": [{ "degreename": "","course": "", "institution": "", "yearofcompletion": "" }],
          "allSkills": [{ "skillname": "", "skilllevel": "" }],
          "allProjects": [{ "projectname": "", "projectdescription": "" }],
          "softskills": [{ "softskillname": "" }],
          "description": "",
          "role":""
        }`;

  useEffect(() => {
    if (!confirmGeneration) return;

    async function fetchData() {
      setLoading(true);
      setError(null);
      setResponse(null);

      try {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const rawText = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

        const jsonResponse = JSON.parse(rawText.replace(/```json|```/g, "").trim());
        setResponse(jsonResponse);
        console.log(jsonResponse);
        setGeneratedResume(jsonResponse);
        
      } catch (err) {
        setError("Failed to fetch resume. Please try again.");
        toast({ variant: "destructive", title: "Error generating resume.", description: String(err) });
      } finally {
        setLoading(false);
        setConfirmGeneration(false);
      }
    }

    fetchData();
  }, [confirmGeneration]);

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
}
