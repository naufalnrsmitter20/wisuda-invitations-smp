import Image from "next/image";

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Invitation from "./components/Invitation";
import Gallery from "./components/Gallery";
import SaveDate from "./components/SaveDate";
import SusunanAcara from "./components/SusunanAcara";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import MediaPartner from "./components/MediaPartner";

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Invitation />
      <Gallery />
      <SaveDate />
      <SusunanAcara />
      <Maps />
      <MediaPartner />
      <div className="h-4 w-full"></div>
      <Footer />
    </>
  );
}
