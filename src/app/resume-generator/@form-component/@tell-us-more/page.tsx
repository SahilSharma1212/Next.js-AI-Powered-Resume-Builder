"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wand } from "lucide-react";
import React from "react";

export default function TellUsMorePage({
  description,
  setDescription,
  confirmGeneration,
  setConfirmGeneration,
  confirmingGeneration,
  setConfirmingGeneration,
  previewIsOn,
  setPreviewIsOn,
  resumeHasOnceBeenGenerated,
  setResumeHasOnceBeenGenerated
}: {
  confirmGeneration: boolean;
  setConfirmGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  confirmingGeneration: boolean;
  setConfirmingGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  previewIsOn:boolean;
  setPreviewIsOn:React.Dispatch<React.SetStateAction<boolean>>;
  resumeHasOnceBeenGenerated:boolean;
    setResumeHasOnceBeenGenerated:React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="w-full max-w-[45rem] flex flex-col">
      <p className="text-xl sm:text-lg font-semibold">
        Tell us more about yourself
      </p>

      <div className="w-full">
        <Label htmlFor="description">Make your response more specific</Label>
        <Textarea
          placeholder="Enter any specific descriptions about how you want your resume to have"
          id="message"
          className="w-full min-h-[8rem]"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <Button
          className="h-12 text-base items-center"
          onClick={() => {
            setConfirmingGeneration(true);
          }}
        >
          {resumeHasOnceBeenGenerated?"Re-Generate":"Generate"} <Wand />
        </Button>

        {confirmingGeneration && (
          <div
            className={`flex items-center transition translate-y-0 gap-4 ${
              confirmingGeneration && "opacity-100"
            }`}
          >
            <Button
              className="bg-green-500/10 hover:bg-green-500/30 text-white"
              onClick={() => {
                setConfirmingGeneration(false);
                setConfirmGeneration(true);
                setPreviewIsOn(true)
              }}
            >
              Confirm{" "}
            </Button>
            <Button
              className="bg-red-500/10 hover:bg-red-600/30 text-white"
              onClick={() => {
                setConfirmingGeneration(false);
              }}
            >
              Cancel
            </Button>
          </div>
        )}
        <Button
        className="h-12"
          onClick={() => {
            setPreviewIsOn((prevIsOn) => {
              const newPreviewIsOn = !prevIsOn;
              console.log("preview is on ", newPreviewIsOn); // Correct value here
              return newPreviewIsOn;
            });
          }}
        >
          {previewIsOn?"Turn off Preview":"Turn on Preview"}
        </Button>
      </div>
    </div>
  );
}
