import React from "react";
import smktelkommalang from "@/public/img/TS SMK TELKOM MALANG.png";
import Image from "next/image";

export default function MediaPartner() {
  return (
    <React.Fragment>
      <section className="py-10 bg-gradient-to-bl from-yellow-300 to-green-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-Judson text-[32px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-bold text-center">Media Partner</h3>
          <div className="mx-auto my-10">
            <Image width={100} height={100} src={smktelkommalang} className="mx-auto" alt="smktelkommalang" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
