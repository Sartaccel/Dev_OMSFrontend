const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left illustration */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src="/login-illustration.png"
          alt="Login"
          className="w-3/4"
        />
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
