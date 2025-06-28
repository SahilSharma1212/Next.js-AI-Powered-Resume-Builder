// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { SparklesCore } from "@/components/ui/sparkles";
// import { Label } from "@radix-ui/react-label";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// export default function SignupPage() {
//   const router = useRouter();

//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // Check if all fields are filled
//   const isFormValid =
//     user.username.trim() !== "" &&
//     user.email.trim() !== "" &&
//     user.password.trim() !== "";

//   return (
//     <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//       {/* sparkles div */}
//       <div className="w-full absolute inset-0 h-screen">
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//       </div>

//       {/* box div */}
//       <div
//         className="p-10 relative dark flex flex-col gap-6 rounded-xl"
//         style={{ backgroundColor: "#14141495" }}
//       >
//         <div
//           style={{ textAlign: "center" }}
//           className="text-2xl font-semibold text-white"
//         >
//           Welcome New User !
//         </div>

//         {/* username */}
//         <div>
//           <Label htmlFor="Username" className="text-white">
//             Username
//           </Label>
//           <Input
//             id="username"
//             placeholder="Username"
//             className="text-white mt-2"
//             value={user.username}
//             onChange={(e) => setUser({ ...user, username: e.target.value })}
//           />
//         </div>

//         {/* email */}
//         <div>
//           <Label htmlFor="Email" className="text-white">
//             Email
//           </Label>
//           <Input
//             id="email"
//             placeholder="Email"
//             className="text-white mt-2"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </div>
//         {/* password */}
//         <div>
//           <Label htmlFor="Password" className="text-white">
//             Password
//           </Label>
//           <Input
//             id="password"
//             type="password"
//             placeholder="Password"
//             className="text-white mt-2"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//         </div>

//         <div className="flex justify-end gap-5">
//           <Button
//             disabled={!isFormValid}
//             className={`opacity-100 ${!isFormValid} ? cursor-not-allowed : ""`}
//           >
//             Sign Up
//           </Button>
//           <Button
//             className="bg-transparent hover:bg-white/5 text-white border border-white"
//             onClick={() => {
//               router.push("/login");
//             }}
//           >
//             Login
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const isFormValid = user.username.trim() !== "" && user.email.trim() !== "" && user.password.trim() !== "";

  const handleSignup = () => {
    startTransition(async () => {
      try {
        const response = await axios.post("/api/users/signup", user); // axios handles JSON conversion automatically

        // You can access the response data directly
        if (response.status !== 200) throw new Error(response.data.error || "Signup failed");
  
        alert("Signup successful!");
      } catch (error) {
        console.error("Signup Error:", error);
        console.log(error);
      }
    });
  };

  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF" />
      </div>

      <div className="p-10 relative dark flex flex-col gap-6 rounded-xl" style={{ backgroundColor: "#14141495" }}>
        <div style={{ textAlign: "center" }} className="text-2xl font-semibold text-white">Welcome New User !</div>

        <div>
          <Label htmlFor="username" className="text-white">Username</Label>
          <Input id="username" placeholder="Username" className="text-white mt-2" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        </div>

        <div>
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input id="email" placeholder="Email" className="text-white mt-2" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </div>

        <div>
          <Label htmlFor="password" className="text-white">Password</Label>
          <Input id="password" type="password" placeholder="Password" className="text-white mt-2" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>

        <div className="flex justify-end gap-5">
          <Button disabled={!isFormValid || isPending} onClick={handleSignup} className={`opacity-100 ${!isFormValid ? "cursor-not-allowed opacity-50" : ""}`}>
            {isPending ? "Signing Up..." : "Sign Up"}
          </Button>
          <Button className="bg-transparent hover:bg-white/5 text-white border border-white" onClick={() => router.push("/login")}>Login</Button>
        </div>
      </div>
    </div>
  );
}
