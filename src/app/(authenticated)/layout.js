import Image from "next/image";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavLinks from '@/app/components/nav-bar';
import next from "next";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
          <div>
            <main>{children}</main>
          </div>
          
        
      </body>
    </html>
  )
}


