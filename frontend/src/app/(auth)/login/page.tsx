import React from "react";
import LoginForm from "@/components/HandleFormComponents/LoginForm";

const LoginPage = () => {
  return (
    <section className="container mx-auto flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg md:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">
            Log in to continue your visa application process
          </p>
        </div>

        {/* Client Component */}
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;