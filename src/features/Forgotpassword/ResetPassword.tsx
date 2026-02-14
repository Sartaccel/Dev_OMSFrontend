import Auth from "@/pages/Auth";
import Input from "@/components/form/input";
import logo from "@/assets/images/logo_icon.png";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const valid =
    password.length > 0 &&
    confirm.length > 0 &&
    password === confirm;

  const handleConfirm = () => {
    if (!valid) return;
    navigate("/verified");
  };

  return (
    <Auth>
      {/* ✅ spacing + width tuned */}
      <div className="bg-white p-7 rounded-2xl shadow-xl w-full max-w-[440px]">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} className="h-6" />
          <h2 className="font-semibold text-sm">
            Office Management System
          </h2>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold mb-5">
          Confirm Password
        </h3>

        {/* Fields group */}
        <div className="space-y-4">

          <Input
            type="password"
            placeholder="New Password"
            icon={<EyeOff size={18} />}
            className="h-[46px]"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            icon={<EyeOff size={18} />}
            className="h-[46px]"
            value={confirm}
            onChange={(e: any) => setConfirm(e.target.value)}
            error={
              confirm && password !== confirm
                ? "Passwords do not match"
                : undefined
            }
          />

        </div>

        {/* Button */}
        <button
          onClick={handleConfirm}
          disabled={!valid}
          className={`
            w-full h-[46px] mt-6 rounded-md text-sm font-medium transition
            ${
              valid
                ? "bg-[#008FEB] hover:opacity-80 text-white"
                : "bg-gray-300 text-white cursor-not-allowed"
            }
          `}
        >
          Confirm
        </button>

      </div>
    </Auth>
  );
}
