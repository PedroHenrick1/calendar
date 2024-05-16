"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image'

export default function Links() {
  const pathname = usePathname();
  return (
        <nav className="flex flex-col items-center shadow-lg shadow-black/100 h-full justify-between ml-5 w-20 back bg-white">
          <Image src="/images/book.png" width={50} height={50} alt="Agenda" className="mt-10" />
          <Link className="" href="/">
            <Image src="/images/home.png" width={50} height={50} alt="home"></Image>
          </Link>

          <Link className="" href="/">
            <Image src="/images/notes.png" width={60} height={60} alt="note"></Image>
          </Link>

          <Link className="" href="/">
            <Image src="/images/calendar.png" width={50} height={50} alt="calendar" className="mb-14"></Image>
          </Link>

        </nav>
      
  );
}