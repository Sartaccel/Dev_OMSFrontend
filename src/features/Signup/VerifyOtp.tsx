import logo from "@/assets/images/logo_icon.png";
import { useNavigate, useLocation } from "react-router-dom";
import Auth from "@/pages/Auth";
import { useRef, useState } from "react";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const flow = location.state?.flow; // "signup" | "forgot"

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;

    const copy = [...otp];
    copy[i] = val;
    setOtp(copy);
    setError("");

    // auto move forward
    if (val && inputs.current[i + 1]) {
      inputs.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[i] && inputs.current[i - 1]) {
      inputs.current[i - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");

    // demo validation — replace with API later
    if (code.length !== 4 || code !== "2365") {
      setError("Please enter valid OTP");
      return;
    }

    // ✅ redirect based on flow
    if (flow === "forgot") {
      navigate("/reset-password");
    } else {
      navigate("/verified");
    }
  };

  return (
    <Auth>
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-[420px]">

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} className="h-6" />
          <h2 className="font-semibold text-sm">
            Office Management System
          </h2>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold mb-1">
          OTP Verification
        </h3>

        <p className="text-xs text-gray-600 mb-4">
          Enter the verification code we sent to
          <span className="font-medium"> abiisugesh@gmail.com</span>
        </p>

        <p className="text-xs text-gray-600 mb-2">
          Type 4 digit security code
        </p>

        {/* OTP Boxes */}
        <div className="flex gap-3 mb-5">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="
                w-12 h-12
                text-center text-lg font-semibold
                border border-primaryBlue
                rounded-md
                outline-none
                focus:ring-2 focus:ring-primaryBlue/30
              "
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-500 mb-3">{error}</p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="
            w-full h-[44px]
            rounded-md
            bg-[#008FEB]
            hover:opacity-70
            text-white text-sm font-medium
          "
        >
          Verify
        </button>

        {/* Resend */}
        <p className="text-xs text-center text-gray-600 mt-3">
          Didn’t you receive the OTP?{" "}
          <button className="text-[#008FEB] font-medium">
            Resend OTP
          </button>
        </p>

      </div>
    </Auth>
  );
}
