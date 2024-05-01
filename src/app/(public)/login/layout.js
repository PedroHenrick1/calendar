import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
