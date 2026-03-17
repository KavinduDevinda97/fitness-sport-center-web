import { galleryImages } from "@/assets/assets";
import Image from "next/image";


export default function Home(){
  return (
    <>
    {/* <main className="bg-primary min-h-screen px-6 py-12">
      <h1 className="font-display text-5xl text-accent text-center mb-10">
        GALLERY
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
            />
            <p className="font-body text-secondary p-2 text-center">{img.alt}</p>
          </div>
        ))}
      </div>
    </main> */}
    </>
  )
}