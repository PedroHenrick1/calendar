"use client";
import Image from "next/image";
import {Metadata} from "next";
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Home() {
  const pathname = usePathname();
  return (
        <h1 className="text-h1 font-bold underline">Calendário</h1>
  );
}

