"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image'

export default function Links() {
  const pathname = usePathname();
  return (
        <nav className="bar shadow-lg shadow-black/50">
          <div className="flex flex-row items-stretch">
            <Image src="/images/book.png" width={50} height={50} alt="Agenda" />
            <p className="ml-5 flex items-center font-sans uppercase text-logo text-orange-700 font-bold">AgendaBook</p>
          </div>
          
          <Link className="mr-10 text-link  text-slate-50 hover:text-black ease-in-out duration-300 " href="/">Home</Link>
          <Link className="text-link mr-10  text-slate-50 hover:text-black ease-in-out duration-300" href="/quemsomos">Quem somos</Link>
          <Link className="text-link mr-10 text-slate-50 hover:text-black ease-in-out duration-300" href="/contato">Contato</Link>
        </nav>
      
  );
}