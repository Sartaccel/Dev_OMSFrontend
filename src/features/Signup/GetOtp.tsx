import Sign from "@/pages/Sign";
import Input from "@/components/form/input";
import logo from "@/assets/images/logo_icon.png";
import { Mail, EyeOff } from "lucide-react";
import Auth from "@/pages/Auth";
import { useNavigate } from "react-router-dom";


export default function GetOtp() {

     const navigate = useNavigate();
  return (
    <Auth>
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[420px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <img src={logo} className="h-6" />
          <h2 className="font-semibold text-sm">Office Management System</h2>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold mb-4">Sign up</h3>

        {/* Fields */}
        <div className="space-y-3">
          <Input
            placeholder="Email Address"
            icon={<Mail size={18} />}
            className="h-[44px]"
          />

          <Input
            type="password"
            placeholder="Password"
            icon={<EyeOff size={18} />}
            className="h-[44px]"
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            icon={<EyeOff size={18} />}
            className="h-[44px]"
          />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 text-[11px] leading-snug mt-4">
          <input type="checkbox" className="mt-0.5 accent-green-600" />
          <span>
            By registering for OMS, you agree to our Terms of Service and
            Privacy Policy
          </span>
        </label>

        {/* Button */}
        <button
        onClick={() => navigate("/verify-otp")}

          className="
    w-full mt-4 h-[44px]
    rounded-md
    bg-[#008FEB]    
    hover:opacity-70
    text-white text-sm font-medium
    transition-colors
  "
        >
          Get OTP
        </button>
      </div>
    </Auth>
  );
}
