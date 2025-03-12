"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useRouter } from "next/navigation";
import {  useToast } from "@/hooks/use-toast";

export function HoverBorderGradientDemo({buttonText,pageLink,showToast,toastTitle,toastDescription}:{buttonText:string,pageLink:string,showToast:boolean,toastTitle:string,toastDescription:string}) {

  const router = useRouter()
  const toast = useToast()
  return (
    <div className=" flex justify-center text-center" onClick={()=>{router.push(pageLink)
      showToast && (
        toast({
          title:toastTitle,
          description:toastDescription,
          className:'bg-black text-white border-gray-600',
        })
      )
    }}>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>{buttonText}</span>
      </HoverBorderGradient>
    </div>
  );
}

