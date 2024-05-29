"use client";
import Image from "next/image";
import React from "react";
import logoSMP from "@/public/svg/logo-smp.svg";
import logoKemendikbud from "@/public/svg/logo-kemendikbud.svg";
import mainBG from "@/public/img/jumbotron.png";
import grad1left from "@/public/img/graduation-1-left.png";
import grad1right from "@/public/img/graduation-1-right.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="relative h-screen w-full">
      <Image src={mainBG} alt="mainbg" className="absolute object-cover -z-10 w-full h-screen" />
      <nav className="w-full h-20 flex justify-between px-6 pt-6">
        <Image src={logoSMP} alt="SMPN 5 Kepanjen" />
        <Image src={logoKemendikbud} alt="SMPN 5 Kepanjen" />
      </nav>
      <main className="mx-auto max-w-5xl mt-44">
        <h2 className="font-Judson text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] uppercase text-center">Undangan</h2>
        <h1 className="font-Jacques_Francois text-[32px] md:text-[42px] lg:text-[52px] xl:text-[64px] uppercase text-center mt-[6px]">WISUDA ANGKATAN XXI</h1>
        <h2 className="font-Judson text-[20px] md:text-[28px] lg:text-[30px]  xl:text-[36px] uppercase text-center mt-[10px] lg:mt-[28px]">SMP NEGERI 3 KEPANJEN</h2>
        <h2 className="font-Judson text-[20px] md:text-[28px] lg:text-[30px] xl:text-[36px] uppercase text-center mt-[10px] font-semibold">15 . 06 . 2024</h2>
      </main>
      <footer>
        <Image src={grad1left} alt="gambar" className="absolute bottom-0 w-52 md:w-64 lg:w-96 xl:w-[400px] -z-10 left-0" />
        <Image src={grad1right} alt="gambar" className="absolute bottom-0 w-52 md:w-64 lg:w-96 xl:w-[400px] -z-10 right-0" />
        <div className="flex justify-center">
          <button className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg mt-4 text-sm px-6 py-3.5 text-center" onClick={() => router.push("#undangan")}>
            Lihat Undangan
          </button>
        </div>
      </footer>
    </header>
  );
}
