import Input from "@/components/form/input";
import { useForm } from "react-hook-form";
import { login } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "@/validations/loginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/app/hooks";
import loginBg from "@/assets/images/login-bg.png";
import logo from "@/assets/images/logo_icon.png";
import { Mail, EyeOff } from "lucide-react";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

const {
  register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = async (data: any) => {
  try {
    await dispatch(login(data)).unwrap();
  } catch {}

  localStorage.setItem("token", "dummy");
  navigate("/dashboard");
};

// const onSubmit = async (data: any) => {
//   try {
//     const res = await dispatch(login(data)).unwrap();

//     console.log("Login Success", res);
//     console.log("Token:", localStorage.getItem("token"));

//     navigate("/dashboard");

//   } catch (err) {
//     console.log("Login Failed", err);
//   }
// };


  const emailValue = watch("email");
const passwordValue = watch("password");

const isFormValid = emailValue && passwordValue;

  return (
<div className="h-screen bg-primaryBlue overflow-hidden flex items-center justify-center">

  <div className="flex w-full max-w-6xl mx-auto items-center">

    {/* LEFT IMAGE */}
<div className="hidden md:flex md:w-[55%] h-full items-center justify-center overflow-hidden">
  <img
    src={loginBg}
    alt="Login"
    className="h-full w-full object-cover scale-110"
  />
</div>

    {/* RIGHT LOGIN */}
    <div className="flex w-full md:w-[45%] items-center justify-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">

       <div className="flex items-center gap-2 mb-4">
        <img src={logo} className="h-6" />
        <h2 className="font-semibold text-lg">
          Office Management System
        </h2>
      </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <Input
            label="Email"
            {...register("email")}
            placeholder="Enter your email"
            error={errors.email?.message}
            icon={<Mail size={18} />}
          />

          <Input
            label="Password"
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            error={errors.password?.message}
            icon={<EyeOff size={18} />}
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="hover:underline"
            >
              Forgot password
            </button>
          </div>

       <button
  type="submit"
  disabled={!isFormValid}
  className={`w-full py-3 rounded-lg font-medium transition
    ${
      isFormValid
        ? "bg-primaryBlue text-white hover:opacity-90"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }
  `}
>
  Login
</button>
<p className="text-sm text-center mt-4">
  Don’t have an account?{" "}
  <span className="text-primaryBlue font-medium cursor-pointer">
    Sign up
  </span>
</p>
        </form>

      </div>

    </div>

  </div>

</div>



  );
};

export default Login;
