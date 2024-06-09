"use client";
import Image from "next/image";
import React, { useState } from "react";
import mainBG from "@/public/img/main-colors.png";
import grad2left from "@/public/img/graduation-2-left.png";
import grad2right from "@/public/img/graduation-2-right.png";
import { dataSiswa } from "../data/siswa";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ScriptURL = "https://script.google.com/macros/s/AKfycbz84eNkfR8RfFVqFWa08lNaUwSRLIXmGsaIBGl_U3r7LS2KSVLd9jjo4fCjQYNkoNKJ/exec";

export default function Invitation() {
  const [invitationCode, setInvitationCode] = useState("");
  const [userData, setUserData] = useState<{ nama_siswa: string; kelas: string; token_inv: string; orang_tua: string } | null>(null);
  const [noWhatsApp, setNoWhatsApp] = useState("");
  const [visible, setIsVisible] = useState(false);
  const [mutating, setMutating] = useState(false);
  const router = useRouter();

  const notifyErr = () => toast.error("Token tidak valid!");
  const notifySuccess = () => toast.success("Token Terverifikasi");
  const notifySubmitSuccess = () => toast.success("Verifikasi Sukses");
  const notifySubmitError = () => toast.error("Verifikasi Gagal!");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvitationCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tokenData = dataSiswa.siswa.find((data) => data.token_inv === invitationCode);
    if (!tokenData) {
      notifyErr();
    } else {
      notifySuccess();
      setUserData(tokenData);
    }
  };

  const handleForms = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsVisible(true);
    e.preventDefault();
    try {
      const response = await fetch(ScriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      notifySubmitSuccess();
      setIsVisible(false);
      setMutating(true);
      console.log("Success!", response);
      router.refresh();
    } catch (error) {
      console.error("Error!", (error as Error).message);
      setIsVisible(false);
      setMutating(false);
      notifySubmitError();
    }
  };

  return (
    <React.Fragment>
      <section className="relative h-[344px] w-full">
        <Image src={mainBG} className="w-full h-[344px] object-cover object-top absolute -z-10" alt="img" />
        <div></div>
        <h2 className="font-Judson text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] mx-2 text-center pt-12 z-10">Dapatkan E-invitation Anda</h2>
        <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-center pt-16 z-10">Masukkan 6 digit kode undangan Anda</h2>
        <form className="flex gap-x-4 mx-2 md:mx-0 justify-center items-center mt-6" onSubmit={handleSubmit}>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 w-[309px] border z-10 border-gray-300 text-gray-900 text-base font-medium focus:ring-yellow-100 focus:border-yellow-300 block p-2.5"
            placeholder="Kode Undangan"
            value={invitationCode}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="text-gray-900 z-10 bg-yellow-200 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm  text-center py-2.5 px-3">
            RSVP
          </button>
        </form>
        <Image src={grad2left} alt="grad2l" className="absolute w-[200px] sm:w-[280px] md:w-[360px] lg:w-[480px] xl:w-auto left-0 bottom-0 h-[344px] -z-10 object-cover" />
        <Image src={grad2right} alt="grad2r" className="absolute w-[200px] sm:w-[280px] md:w-[360px] lg:w-[480px] xl:w-auto right-0 bottom-0 h-[344px] -z-10 object-cover" />
        <Toaster />
      </section>
      {userData && (
        <section className="relative h-[765px] w-full mt-6">
          <Image src={mainBG} className="w-full h-[765px] object-cover object-top absolute -z-10" alt="img" />
          <div className="px-2">
            <h4 className="font-Judson text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] text-center py-10 font-bold">Konfirmasi Undangan Wisuda</h4>
            <p className="text-center font-Karla text-[16px] font-semibold">Token : {userData.token_inv}</p>
            <form name="form-komentar" className="max-w-xl mx-auto mt-14" onSubmit={handleForms}>
              <input
                type="hidden"
                value={userData.token_inv}
                readOnly
                id="token_inv"
                name="token_inv"
                className="bg-transparent font-semibold border-2 mt-1 border-black text-gray-900 text-sm rounded-lg focus:ring-yellow-100 focus:border-yellow-300 block w-full p-2.5"
                required
              />
              <div className="mt-4">
                <label htmlFor="nama_siswa" className="font-Karla font-semibold text-[16px]">
                  Nama Siswa (Wisudawan/Wisudawati) :
                </label>
                <input
                  type="text"
                  value={userData.nama_siswa}
                  readOnly
                  id="nama_siswa"
                  name="nama_siswa"
                  className="bg-transparent font-semibold border-2 mt-1 border-black text-gray-900 text-sm rounded-lg focus:ring-yellow-100 focus:border-yellow-300 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="kelas" className="font-Karla font-semibold text-[16px]">
                  Kelas :
                </label>
                <input
                  type="text"
                  value={userData.kelas}
                  readOnly
                  id="kelas"
                  name="kelas"
                  className="bg-transparent font-semibold border-2 mt-1 border-black text-gray-900 text-sm rounded-lg focus:ring-yellow-100 focus:border-yellow-300 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="orang_tua" className="font-Karla font-semibold text-[16px]">
                  Nama Wali Murid :
                </label>
                <input
                  type="text"
                  value={userData.orang_tua}
                  readOnly
                  id="orang_tua"
                  name="orang_tua"
                  className="bg-transparent font-semibold border-2 mt-1 border-black text-gray-900 text-sm rounded-lg focus:ring-yellow-100 focus:border-yellow-300 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="noWhatsApp" className="font-Karla font-semibold text-[16px]">
                  Nomor Whatsapp Wali Murid :
                </label>
                <input
                  type="number"
                  value={noWhatsApp}
                  onChange={(e) => setNoWhatsApp(e.target.value)}
                  id="noWhatsApp"
                  name="noWhatsApp"
                  className="bg-transparent font-semibold border-2 mt-1 border-black text-gray-900 text-sm rounded-lg focus:ring-yellow-100 focus:border-yellow-300 block w-full p-2.5"
                  required
                />
              </div>
              {visible ? (
                <button
                  type="button"
                  disabled
                  className="text-gray-900 mt-6 rounded-md bg-transparent border-black border-2 focus:ring-4 focus:outline-none focus:ring-slate-200 text-[16px] font-semibold font-Judson text-center py-2.5 px-3"
                >
                  Loading...
                </button>
              ) : (
                <button
                  disabled={mutating}
                  type="submit"
                  className="text-gray-900 mt-6 rounded-md bg-transparent border-black border-2 focus:ring-4 focus:outline-none focus:ring-slate-200 text-[16px] font-semibold font-Judson text-center py-2.5 px-3"
                >
                  Konfirmasi Kehadiran
                </button>
              )}
              <Toaster />
            </form>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}
