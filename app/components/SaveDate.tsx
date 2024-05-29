"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mainBG from "@/public/img/main-colors.png";
import grad3left from "@/public/img/graduation-3-left.png";
import grad3right from "@/public/img/graduation-3-right.png";
import SVGSaveDate from "@/public/svg/SVGSaveDate";
export default function SaveDate() {
  const [now, setNow] = useState(new Date());
  const targetDate = new Date("2024-06-15T08:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(new Date(targetDate).getTime() - now.getTime(), 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
  });

  return (
    <React.Fragment>
      <section className="h-[517px] relative w-full">
        <Image src={mainBG} className="w-full h-[517px] object-cover object-top absolute -z-10" alt="img" />
        <h2 className="font-Judson text-[48px] font-bold pt-20 text-center ">15 Juni 2024</h2>
        <div className="flex justify-center mt-12">
          <SVGSaveDate />
        </div>
        <main className="grid grid-cols-4 gap-6 max-w-sm mx-auto mt-14">
          <div>
            <h5 className="text-[48px] font-normal text-center">{timeLeft.days}</h5>
            <p className="text-[24px] font-normal text-center -mt-2">Hari</p>
          </div>
          <div>
            <h5 className="text-[48px] font-normal text-center">{timeLeft.hours}</h5>
            <p className="text-[24px] font-normal text-center -mt-2">Jam</p>
          </div>
          <div>
            <h5 className="text-[48px] font-normal text-center">{timeLeft.minutes}</h5>
            <p className="text-[24px] font-normal text-center -mt-2">Menit</p>
          </div>
          <div>
            <h5 className="text-[48px] font-normal text-center">{timeLeft.seconds}</h5>
            <p className="text-[24px] font-normal text-center -mt-2">Detik</p>
          </div>
        </main>
        <Image src={grad3left} alt="grad2l" className="absolute left-0 bottom-0 h-[517px] -z-10 object-cover" />
        <Image src={grad3right} alt="grad2r" className="absolute right-0 bottom-0 h-[517px] -z-10 object-cover" />
      </section>
    </React.Fragment>
  );
}
