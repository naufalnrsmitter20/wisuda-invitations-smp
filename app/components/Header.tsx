"use client";
import Image from "next/image";
import React from "react";
import logoSMP from "@/public/svg/logo-smp.svg";
import logoKemendikbud from "@/public/svg/logo-kemendikbud.svg";
import mainBG from "@/public/img/jumbotron.png";
import grad1left from "@/public/img/graduation-1-left.png";
import grad1right from "@/public/img/graduation-1-right.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import smktelkommalang from "@/public/img/TS SMK TELKOM MALANG.png";

export default function Header() {
  return (
    <header className="relative h-full w-full pb-20">
      <Image src={mainBG} alt="mainbg" className="absolute object-cover -z-10 w-full h-screen" />
      <nav className="w-full h-auto flex justify-between px-6 pt-6">
        <Image src={logoSMP} alt="SMPN 5 Kepanjen" className="scale-50 md:scale-75 lg:scale-90 xl:scale-100" />
        <Image src={logoKemendikbud} alt="SMPN 5 Kepanjen" className="scale-50 md:scale-75 lg:scale-90 xl:scale-100" />
      </nav>
      <main className="mx-auto max-w-5xl mt-10">
        <h2 className="font-Poppins text-[20px] md:text-[26px] lg:text-[30px] font-normal xl:text-[36px] uppercase text-center">Undangan</h2>
        <h1 className="font-Poppins font-medium text-[32px] md:text-[42px] lg:text-[52px] xl:text-[64px] uppercase text-center mt-[10px]">PURNAWIYATA SISWA KELAS IX</h1>
        <h1 className="font-Poppins font-medium text-[32px] md:text-[42px] lg:text-[52px] xl:text-[64px] uppercase text-center mt-[6px]">Tahun Ajaran 2023/2024</h1>
        <h2 className="font-Poppins text-[20px] md:text-[28px] lg:text-[30px] xl:text-[36px] uppercase text-center mt-[10px] lg:mt-[28px]">SMP NEGERI 2 NGAJUM</h2>
      </main>
      <footer>
        <Image src={grad1left} alt="gambar" className="absolute bottom-0 w-52 md:w-64 lg:w-96 xl:w-[400px] -z-10 left-0" />
        <Image src={grad1right} alt="gambar" className="absolute bottom-0 w-52 md:w-64 lg:w-96 xl:w-[400px] -z-10 right-0" />
        <div className="flex justify-center mt-4">
          <Link href="#undangan" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg mt-4 text-sm px-6 py-3.5 text-center">
            Lihat Undangan
          </Link>
        </div>
      </footer>
      <h3 className="font-Poppins text-[20px] mt-10 sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]  text-center">Media Partner</h3>

      <div className="mx-auto mt-6">
        <Image width={60} height={60} src={smktelkommalang} className="mx-auto lg:scale-125" alt="smktelkommalang" />
      </div>
    </header>
  );
}
