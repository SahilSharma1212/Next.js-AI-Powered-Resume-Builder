"use client";

import { useRef, FC } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import GeminiResponse from "./gemini-api-response";
import { Button } from "../../../components/ui/button";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useState } from "react";
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
  name: string;
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
interface PdfPreviewProps {
  confirmGeneration: boolean;
  setConfirmGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  name: string; // Updated to use Name interface
  phonenumber: string;
  email: string;
  yourlocation: string;
  achievements: string;
  description: string;
  allQualifications: Qualification[];
  allSkills: Skill[];
  allrole: Role[];
  softskills: SoftSkill[];
  allprojects: Project[];
  socials: Social[];
}

// PdfPreview component
const PdfPreview: FC<PdfPreviewProps> = ({
  confirmGeneration,
  setConfirmGeneration,
  name,
  phonenumber,
  email,
  yourlocation,
  description,
  allQualifications,
  allSkills,
  allrole,
  softskills,
  allprojects,
  socials,
}) => {
  const searchParams = useSearchParams();
  const template = searchParams.get("template") ?? "OrangeAndBeige";
  const { toast } = useToast();
  const pdfRef = useRef<HTMLDivElement>(null);
  const [generatedResume, setGeneratedResume] = useState<ResumeResponse | null>(null);

  const downloadPDF = async () => {
    if (!pdfRef.current) return;

    if (!generatedResume) {
      toast({
        title: "Error",
        description: "Resume not generated yet.",
        className: "bg-red-500 text-white",
      });
      return;
    }

    try {
      // Convert the preview to an image using html2canvas
      const canvas = await html2canvas(pdfRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      // Create a new PDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = 210; // A4 width in mm
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Save the PDF locally
      pdf.save("resume.pdf");

      toast({
        title: "Download Successful",
        description: "Your resume has been downloaded.",
        className: "bg-green-500 text-white",
      });

      // Save Resume in Database
      const responseToBeSent: ResumeResponse & { templatename: string } = {
        name:generatedResume.name,
        email: generatedResume.email,
        phone: generatedResume.phone,
        yourLocation: generatedResume.yourLocation,
        socials: generatedResume.socials,
        workExperience: generatedResume.workExperience,
        educationalDetails: generatedResume.educationalDetails,
        allSkills: generatedResume.allSkills,
        allProjects: generatedResume.allProjects,
        softskills: generatedResume.softskills,
        description: generatedResume.description,
        role: generatedResume.role,
        templatename: template,
      };

      await axios.post("/api/resume/create-resume", responseToBeSent);

      toast({
        title: "Saved Successfully",
        description: "Your resume has been saved in the database.",
        className: "bg-black text-white border-gray-600",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.log(errorMessage)
      toast({
        title: "Error",
        description: "Failed to save the resume.",
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center font-medium text-white justify-center w-full mb-2">
        Preview
      </div>

      {/* The actual content preview */}
      <div
        ref={pdfRef}
        className="w-[210mm] min-h-[297mm] max-w-[210mm] bg-white border shadow rounded-lg"
      >
        <GeminiResponse
          confirmGeneration={confirmGeneration}
          setConfirmGeneration={setConfirmGeneration}
          name={name}
          phonenumber={phonenumber}
          email={email}
          yourlocation={yourlocation}
          description={description}
          allQualifications={allQualifications}
          allSkills={allSkills}
          allrole={allrole}
          allprojects={allprojects}
          softskills={softskills}
          socials={socials}
          setGeneratedResume={setGeneratedResume}
        />
      </div>

      {/* Download Button */}
      <Button onClick={downloadPDF} className="mt-2">
        Save & Download PDF
      </Button>
    </div>
  );
};

export default PdfPreview;