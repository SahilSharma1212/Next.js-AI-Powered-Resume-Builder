"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { AlertDialogButton } from "../../_components/special-alert-dialogue";

export default function PersonalDetailsPage({
  name,
  setName,
  phonenumber,
  setPhonenumber,
  email,
  setEmail,
  yourlocation,
  setYourlocation,
  socials,
  setSocials,
  newSocial,
  setNewSocial,
}: {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  phonenumber: string;
  setPhonenumber: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  yourlocation: string;
  setYourlocation: React.Dispatch<React.SetStateAction<string>>;
  socials: { socialName: string; socialLink: string }[];
  setSocials: React.Dispatch<
    React.SetStateAction<{ socialName: string; socialLink: string }[]>
  >;
  newSocial: { socialName: string; socialLink: string };
  setNewSocial: React.Dispatch<
    React.SetStateAction<{ socialName: string; socialLink: string }>
  >;
}) {
  return (
    <div id="personal-details" className="flex flex-col self-start">
      <div className="text-xl ">Personal Details</div>
      <div>
        <Label htmlFor="name" className="text-sm">
          Name
        </Label>
        <Input
          type="text"
          id="Name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="PhoneNumber" className="text-sm">
          Phone no.
        </Label>
        <Input
          type="text"
          id="PhoneNumber"
          placeholder="Phone no."
          value={phonenumber}
          onChange={(e) => {
            setPhonenumber(e.target.value);
          }}
        />
      </div>

      <div>
        <Label htmlFor="YourLocation" className="text-sm">
          Your Location
        </Label>
        <Input
          type="text"
          id="YourLocation"
          placeholder="State , City"
          className="text-white"
          value={yourlocation}
          onChange={(e) => {
            setYourlocation(e.target.value);
          }}
        />
      </div>
      <div>
        <AlertDialogButton socials={socials} setSocials={setSocials} newSocial={newSocial} setNewSocial={setNewSocial} />
      </div>
    </div>
  );
}
