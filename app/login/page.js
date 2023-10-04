import LoginForm from "@/app/components/loginForm";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Illustration from "@/public/images/illustration.png";

export const metadata = {
  title: "Login",
  description: "...",
};

export default function Login() {
  return (
    <div className="h-screen w-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center bg-primary">
        <Image
          className="hidden lg:block"
          src={Illustration}
          alt="Illustraion"
          width={500}
          height={500}
        />
      </div>
      <div className="flex h-4/5 flex-col justify-center md:mx-40 lg:h-full">
        <Image className="mx-auto" src={Logo} alt="Logo" />
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hello Again!</h1>
          <h1 className="text-lg font-semibold text-gray-400">
            Enter your email and password to login
          </h1>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
