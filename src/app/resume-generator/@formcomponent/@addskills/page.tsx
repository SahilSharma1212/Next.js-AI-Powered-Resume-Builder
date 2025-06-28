"use client";

import React, { useState } from "react";
import SkillSectionPage from "./skillsectionpage";

export default function AddSkillsPage() {
  const [skillname, setSkillName] = useState("");
  const [skilllevel, setSkilllevel] = useState("");
  const [allSkils, setAllSkils] = useState<
    Array<{ skillname: string; skilllevel: string }>
  >([]);

  return (
    <SkillSectionPage
      skillname={skillname}
      setSkillName={setSkillName}
      skilllevel={skilllevel}
      setSkilllevel={setSkilllevel}
      allSkils={allSkils}
      setAllSkils={setAllSkils}
    />
  );
}
export const dynamic = "force-dynamic";
