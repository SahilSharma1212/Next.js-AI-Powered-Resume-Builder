import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleX, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import this

export function AlertDialogButton({
  socials,
  setSocials,
  newSocial,
  setNewSocial,
}: {
  socials: { socialName: string; socialLink: string }[];
  setSocials: React.Dispatch<
    React.SetStateAction<{ socialName: string; socialLink: string }[]>
  >;
  newSocial: { socialName: string; socialLink: string };
  setNewSocial: React.Dispatch<
    React.SetStateAction<{ socialName: string; socialLink: string }>
  >;
}) {
  // Function to add a social link
  const addSocial = () => {
    if (newSocial.socialName && newSocial.socialLink) {
      setSocials((prev) => [...prev, newSocial]); // Add new entry to list
      setNewSocial({ socialName: "", socialLink: "" }); // Reset input fields
    }
  };

  // Function to remove a social link
  const removeSocial = (index: number) => {
    setSocials((prev) => prev.filter((_, i) => i !== index)); // Remove entry at index
  };

  return (
    <div className="w-96">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="h-12 text-white">
            Add Socials <Github strokeWidth={1} />
            <Instagram strokeWidth={1} /> <Linkedin strokeWidth={1} />
            <Mail strokeWidth={1} />
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="dark">
          {/* ✅ Hidden Title for Accessibility */}
          <VisuallyHidden>
            <AlertDialogTitle>Add Social Links</AlertDialogTitle>
          </VisuallyHidden>

          <div>
            <h1 className="text-white">Add Socials </h1>
            <p className="text-sm text-gray-500">
              Make it easier for people to reach you
            </p>
          </div>

          {/* Input Field for Link */}
          <Input
            type="text"
            id="link"
            placeholder="Enter your social link"
            className="w-[500px] lg:w-full sm:w-full text-white"
            value={newSocial.socialLink}
            onChange={(e) =>
              setNewSocial((prev) => ({ ...prev, socialLink: e.target.value }))
            }
          />

          {/* Select Dropdown for Platform */}
          <Select
            onValueChange={(value) =>
              setNewSocial((prev) => ({ ...prev, socialName: value }))
            }
          >
            <SelectTrigger className="w-full dark:text-white">
              <SelectValue placeholder="Select a platform" />
            </SelectTrigger>
            <SelectContent className="text-white bg-black">
              <SelectGroup>
                <SelectLabel>Platform</SelectLabel>
                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                <SelectItem value="Github">GitHub</SelectItem>
                <SelectItem value="Twitter">Twitter</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Portfolio">Personal Portfolio</SelectItem>
                <SelectItem value="Dribbl">Dribbl</SelectItem>
                <SelectItem value="Behance">Behance</SelectItem>
                <SelectItem value="Figma">Figma</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Footer Buttons */}
          <AlertDialogFooter>
            <AlertDialogCancel className="text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={addSocial}>Add</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Display Added Social Links */}
      {socials.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map((item, index) => (
            <div
              key={index}
              className="text-sm rounded-lg px-3 py-2 mx-2 bg-white/10 text-white inline-flex gap-2 justify-between items-center border border-gray-500"
            >
              <a
                href={item.socialLink}
                target="_blank"
                className="text-white font-semibold block"
              >
                {item.socialName}
              </a>
              <CircleX
                className="cursor-pointer text-gray-500 hover:text-red-500 transition ease-in"
                strokeWidth={1}
                onClick={() => removeSocial(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
