import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <section className="bg-gradient-to-l pt-10 from-yellow-200 to-green-100">
        <main className="pb-16">
          <h3 className="font-Judson text-[40px] font-bold text-center">SMP NEGERI 3 KEPANJEN</h3>
          <p className="text-[24px] font-normal text-center mt-8">Jl. Raya Sukoraharjo No.326, Blobo, Sukoharjo, Kec. Kepanjen, Kabupaten Malang, Jawa Timur 65163</p>
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
