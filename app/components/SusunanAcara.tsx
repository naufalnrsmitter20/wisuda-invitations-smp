import Image from "next/image";
import React from "react";
import mainGraduation from "@/public/svg/main-graduation.svg";

export default function SusunanAcara() {
  return (
    <React.Fragment>
      <section className="pt-20 bg-gradient-to-tr from-yellow-300 to-green-100">
        <div className="max-w-6xl mx-auto relative">
          <h4 className="font-Judson text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] font-semibold px-2">Susunan Acara</h4>
          <main className="font-Karla text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] ml-8 mt-6 px-2">
            <p>01. Pembukaan</p>
            <p>02. Menyanyikan Lagu Indonesia Raya</p>
            <p>03. Pembacaan ayat Suci Al Quran</p>
            <p>04. Tari Topeng Grebeg Sabrang</p>
            <p>05. Laporan Pendidikan</p>
            <p>06. Sambutan perwakilan kelas 7 dan 8</p>
            <p>07. Sambutan perwakilan kelas 9</p>
            <p>08. Koor Kelas 9</p>
            <p>09. Sambutan Wakil orangtua kelas 9</p>
            <p>10. Sambutan Kepala Sekolah</p>
            <p>11. Tari Gandrung Banyuwangi</p>
            <p>12. Sambutan Pengawas SMP Dinas Pendidikan Kabupaten Malang</p>
            <p>13. Pengukuhan Wisudawan</p>
            <p>14. Doa</p>
            <p>15. Penutup</p>
          </main>
          <Image src={mainGraduation} alt="a" className="w-full " />
        </div>
      </section>
    </React.Fragment>
  );
}
