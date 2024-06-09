import React from "react";
import gallery1 from "@/public/img/gallery/IMG-20240609-WA0005.jpg";
import gallery2 from "@/public/img/gallery/IMG-20240609-WA0006.jpg";
import gallery3 from "@/public/img/gallery/IMG-20240609-WA0007.jpg";
import gallery4 from "@/public/img/gallery/IMG-20240609-WA0008.jpg";
import gallery5 from "@/public/img/gallery/IMG-20240609-WA0009.jpg";
import gallery6 from "@/public/img/gallery/IMG-20240609-WA0010.jpg";
import Image, { StaticImageData } from "next/image";

interface IPhotos {
  images: StaticImageData;
  alt: string;
}

export default function Gallery() {
  const photos: IPhotos[] = [
    {
      images: gallery1,
      alt: "Gambar 1",
    },
    {
      images: gallery2,
      alt: "Gambar 2",
    },
    {
      images: gallery3,
      alt: "Gambar 3",
    },
    {
      images: gallery4,
      alt: "Gambar 4",
    },
    {
      images: gallery5,
      alt: "Gambar 5",
    },
    {
      images: gallery6,
      alt: "Gambar 6",
    },
  ];
  return (
    <React.Fragment>
      <section className="bg-gradient-to-r py-10 from-yellow-200 to-green-100">
        <h4 className="font-Judson text-[36px] text-center font-semibold">Gallery</h4>
        <div className="my-10 mx-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 max-w-fit mx-auto">
            {photos.map((photo, index) => (
              <div key={index} className="relative">
                <Image width={500} height={400} src={photo.images.src} alt={photo.alt} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
