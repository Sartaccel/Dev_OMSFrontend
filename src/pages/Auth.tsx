import loginBg from "@/assets/images/login-bg.png";
import React from "react";

interface AuthProps {
  children: React.ReactNode;
}

export default function Auth({ children }: AuthProps) {
  return (
    <div className="min-h-screen bg-primaryBlue overflow-hidden flex items-center justify-center">

      <div className="flex w-full max-w-6xl mx-auto items-center">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex md:w-[55%] h-screen items-center justify-center overflow-hidden">
          <img
            src={loginBg}
            alt="Auth"
            className="h-full w-full object-cover scale-110"
          />
        </div>

        {/* RIGHT CONTENT SLOT */}
        <div className="flex w-full md:w-[45%] items-center justify-center">
          {children}
        </div>

      </div>
    </div>
  );
}
