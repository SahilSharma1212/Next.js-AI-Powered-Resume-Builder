"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Ban, Check } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { LoadingDots } from "@/components/LoadingDotsComponent";
  

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen py-2 overflow-hidden">
        <Spotlight />
      <div className="bg-[#14141495] p-8 w-[300px] text-white flex flex-col gap-10 rounded-lg items-center hover:shadow-white/10 hover:shadow-lg hover:-translate-y-3 transition-all">
        <h1 className="text-3xl font-medium">Verify Email</h1>
        <h2 className="w-full p-2 bg-white/5 hover:bg-white/10 transition-all rounded-md text-wrap">
          {token ? `${token.slice(0, 5)}********************  ` : "no token"}
        </h2>

        {loading && <LoadingDots/>}

        {verified && !loading && (
          <div className=" flex flex-col items-center gap-4">
            <h2 className="text-xl bg-green-400 flex items-center justify-center p-2 rounded-md w-full">Email Verified <Check/></h2>
            <h2 className="text-base">You can now move to login page</h2>
            <Button className="dark" onClick={()=>router.push("/login")}>Login</Button>
          </div>
        )}

        {error && !loading && (
          <div className="flex text-lg bg-red-500 p-2 px-10 rounded-md gap-3 items-center">
            <h2
              className="inline-block"
              style={{ textAlign: "center" }}
            >
              Error
            </h2>
            <Ban size={20}/>
          </div>
        )}
      </div>
    </div>
  );
}
