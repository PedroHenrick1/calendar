"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Links() {
  const pathname = usePathname();
  return (
      <nav>
        <Link className="mr-10 text-link" href="/login">Login</Link>
        <Link className="text-link" href="/cadastrar">Cadastrar</Link>
      </nav>
  );
}