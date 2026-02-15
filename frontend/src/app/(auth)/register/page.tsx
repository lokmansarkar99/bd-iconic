import React from "react";
import RegisterForm from "@/components/HandleFormComponents/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="container mx-auto flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg md:p-8 ">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create an Account</h1>
          <p className="text-gray-600 mt-2">
            Start your visa application journey with BD Iconic
          </p>
        </div>

        {/* Client Component */}
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;