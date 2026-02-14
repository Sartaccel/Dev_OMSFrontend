import Auth from "@/pages/Auth";
import Input from "@/components/form/input";
import logo from "@/assets/images/logo_icon.png";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <Auth>
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-[400px]">

        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <img src={logo} className="h-6" />
          <h2 className="font-semibold text-sm">
            Office Management System
          </h2>
        </div>

        <h3 className="text-sm font-semibold mb-1">
          Forgot password
        </h3>

        <p className="text-xs text-gray-600 mb-4">
          Enter your Register Email
        </p>

        <Input
          placeholder="Email"
          icon={<Mail size={18} />}
          className="h-[44px]"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        {/* ✅ changed here */}
        <button
          onClick={() =>
            navigate("/verify-otp", { state: { flow: "forgot" } })
          }
          disabled={!email}
          className={`
            w-full h-[44px] mt-4
            rounded-md text-sm font-medium transition
            ${
              email
                ? "bg-[#008FEB] text-white hover:opacity-80 cursor-pointer"
                : "bg-gray-300 text-white cursor-not-allowed"
            }
          `}
        >
          Get OTP
        </button>

      </div>
    </Auth>
  );
}
