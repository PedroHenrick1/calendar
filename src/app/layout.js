import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from '@/app/components/nav-bar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agenda",
  description: "A sua agenda",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
        <NavLinks/>
      </body>
    </html>
  )
}


