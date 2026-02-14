import signupImg from "@/assets/images/sign.png";
import React from "react";

interface SignProps {
  children: React.ReactNode;
}

export default function Sign({ children }: SignProps) {
  return (
    <div className="min-h-screen bg-primaryBlue flex items-center justify-center">

      <div className="flex w-full max-w-6xl mx-auto items-center">

        {/* LEFT SIDE PANEL */}
        <div className="hidden md:flex md:w-[55%] items-center justify-center p-8">
          <div className="bg-primaryBlue/90  p-8  max-w-lg">

            <h2 className="text-2xl font-semibold mb-2">
              Welcome to Your Workspace
            </h2>

            <p className="text-gray-600 mb-6">
              Organize people, tasks, and processes effortlessly.
            </p>

            <div className="bg-blue-600 rounded-xl p-6">
              <img
                src={signupImg}
                alt="Workspace"
                className="w-full object-contain"
              />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (Signup Form Slot) */}
        <div className="flex w-full md:w-[45%] items-center justify-center">
          {children}
        </div>

      </div>
    </div>
  );
}
