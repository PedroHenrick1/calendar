import Image from "next/image";
import {Metadata} from "next";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Login</h1>
    </main>
  );
}
