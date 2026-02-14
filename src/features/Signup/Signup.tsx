import { Link } from "react-router-dom";
import Sign from "@/pages/Sign";
import Input from "@/components/form/input";
import logo from "@/assets/images/logo_icon.png";
import { Mail, EyeOff, Phone, Building2, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <Sign>
      <div className="bg-white p-4 sm:p-5 rounded-xl shadow-lg w-full max-w-[420px] space-y-2.5">

        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src={logo} className="h-5" />
          <h2 className="font-semibold text-base sm:text-lg text-gray-900">
            Office Management System
          </h2>
        </div>

        <h3 className="text-sm font-semibold">Sign up</h3>

        {/* Company */}
        <Input
          placeholder="Company Name"
          className="h-[44px] sm:h-[40px]"
          icon={<Building2 size={18} />}
        />

        {/* Email */}
        <Input
          placeholder="Email Address"
          className="h-[44px] sm:h-[40px]"
          icon={<Mail size={18} />}
        />

        {/* Phone row */}
        <div className="h-[44px] sm:h-[40px] border rounded-lg bg-gray-50 flex items-center px-3">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            +91
            <ChevronDown size={14} />
          </div>

          <div className="mx-3 h-5 w-px bg-gray-300" />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
          />

          <Phone size={18} className="text-gray-400" />
        </div>

        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          className="h-[44px] sm:h-[40px]"
        />

        {/* City / State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Input placeholder="City" className="h-[44px] sm:h-[40px]" />
          <Input placeholder="State" className="h-[44px] sm:h-[40px]" />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 text-[11px] leading-tight">
          <input type="checkbox" className="mt-0.5" />
          <span>
            By registering for OMS, you agree to our Terms of Service and
            Privacy Policy
          </span>
        </label>

        {/* Button */}
        <button
          onClick={() => navigate("/otp")}
          className="w-full h-[44px] sm:h-[40px] rounded-md bg-[#008FEB] text-white font-medium text-sm hover:opacity-70 transition"
        >
          Create my account
        </button>

        {/* Bottom link */}
        <p className="text-[11px] text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#008FEB] font-medium">
            Log in
          </Link>
        </p>

      </div>
    </Sign>
  );
}
