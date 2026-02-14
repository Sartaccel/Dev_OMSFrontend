import Auth from "@/pages/Auth";
import logo from "@/assets/images/logo_icon.png";
import successImg from "@/assets/images/Thumps.png";
import { useNavigate } from "react-router-dom";

export default function Verified() {
  const navigate = useNavigate();

  return (
    <Auth>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-[420px]">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} className="h-6" />
          <h2 className="font-semibold text-base">
            Office Management System
          </h2>
        </div>

        {/* Icon */}
       <div className="mb-4">
  <img
    src={successImg}
    alt="Success"
    className="w-10 h-10 object-contain"
  />
</div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">
          Success
        </h3>

        {/* Message */}
        <p className="text-sm text-gray-600 mb-6">
          Congratulations, Your account has been successfully created.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="
            w-full h-[44px]
            rounded-md
            bg-[#008FEB]
            hover:opacity-70
            text-white font-medium text-sm
            transition-colors
          "
        >
          Continue
        </button>

      </div>
    </Auth>
  );
}
