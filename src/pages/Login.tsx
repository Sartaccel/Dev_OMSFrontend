import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(
      loginSuccess({
        name: "Admin",
        role: "ADMIN",
      })
    );

    navigate("/"); 
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581091012184-3b7df3f9185b?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Office Management System
        </h1>
        <h2 className="text-xl font-semibold text-center mb-6">Login</h2>

        {/* Form */}
        <div className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <button className="text-blue-600 hover:underline">
              Forget password?
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>

        {/* Sign up link */}
        <p className="mt-6 text-center text-gray-700 text-sm">
          Don’t have an account?{" "}
          <button className="text-blue-600 hover:underline">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
