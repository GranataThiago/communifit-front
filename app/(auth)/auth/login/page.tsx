import Link from "next/link";
import React from "react";
import { LoginForm } from "./components/LoginForm";
import { SocialMediaForm } from "../components/SocialMediaForm";
import { montserrat } from "../../../components/fonts";
import Logo from "../../../components/Company/Logo";

const LoginPage = () => {
  return (
    <section
      className={`flex flex-col justify-around items-center w-full h-screen p-6 ${montserrat.className}`}
    >
      <div className="text-center">
        <Logo />
        <p className="text-xl font-medium">Login</p>
      </div>

      <LoginForm></LoginForm>

      <SocialMediaForm />

      <p data-testid="text-footer">
        Don&apos;t have an account yet?{" "}
        <Link href={"/auth/register"}>
          <strong>Sign Up</strong>
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
