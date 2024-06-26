import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <section className="bg-gradient-to-l pt-10 from-yellow-200 to-green-100">
        <main className="pb-16">
          <h3 className="font-Judson text-[32px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-bold text-center">SMP NEGERI 2 NGAJUM</h3>
          <p className="text-[15px] md:text-[18px] lg:text-[22px] xl:text-[24px] font-normal text-center mt-8 px-2">
            Jl. Sukorejo, Rt 02/Rw 06, Ds. Kesamben, Kec. Ngajum, Kab. Malang, Area Sawah, Kesamben, Kec. Ngajum, Kabupaten Malang, Jawa Timur 65164
          </p>
        </main>
        <footer className="bg-white py-4">
          <p className="text-[12px] text-center font-normal">
            Powered by{" "}
            <Link href={"#"} className="font-bold hover:underline hover:text-yellow-400">
              Dev Naufalnr
            </Link>{" "}
          </p>
        </footer>
      </section>
    </React.Fragment>
  );
}

export default Footer;
