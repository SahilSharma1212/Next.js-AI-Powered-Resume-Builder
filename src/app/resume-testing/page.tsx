
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function ResumeTestingPage() {
  const searchParams = useSearchParams();
  const [resumedata, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchResume = async () => {
      try {
        const resumeId = searchParams.get("templateId");
        if (!resumeId) {
          setError("Template ID is missing in the URL.");
          setLoading(false);
          return;
        }

        console.log("Fetching resume for ID:", resumeId);

        const response = await axios.post("/api/resume/get-resume", { resumeId });

        if (!response.data) {
          setError("No resume available.");
        } else {
          setResumeData(response.data);
        }
      } catch (err) {
        console.error("Error fetching resume:", err);
        setError("Failed to fetch resume.");
      } finally {
        setLoading(false);
      }
    };

    searchResume();
  }, [searchParams]); // ✅ Dependency added

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="text-white">
      <pre>{JSON.stringify(resumedata, null, 2)}</pre>
    </div>
  );
}
