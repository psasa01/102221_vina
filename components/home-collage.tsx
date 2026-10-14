"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "https://res.cloudinary.com/sale01/image/upload/v1624009371/vis%20kolaz/vis2.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009369/vis%20kolaz/vis9.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009367/vis%20kolaz/vis3.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009369/vis%20kolaz/vis10.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009369/vis%20kolaz/vis7.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009368/vis%20kolaz/vis5.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009367/vis%20kolaz/vis1.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009368/vis%20kolaz/vis11.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009369/vis%20kolaz/vis8.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009368/vis%20kolaz/vis6.jpg",
  "https://res.cloudinary.com/sale01/image/upload/v1624009367/vis%20kolaz/vis4.jpg",
];

export function HomeCollage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, index) => (
          <button key={src} type="button" className="mb-4 block w-full overflow-hidden rounded-md bg-neutral-100 text-left shadow-sm transition hover:shadow-md" onClick={() => setSelected(src)} aria-label={`Otvori sliku ${index + 1}`}>
            <Image src={src} alt={`Kolekcija vina ${index + 1}`} width={1200} height={900} className="h-auto w-full" unoptimized />
          </button>
        ))}
      </div>

      {selected && (
        <button type="button" aria-label="Zatvori sliku" className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-6" onClick={() => setSelected(null)}>
          <Image src={selected} alt="Uvećana slika" width={1600} height={1200} className="max-h-[90vh] w-auto max-w-[90vw] object-contain" unoptimized />
        </button>
      )}
    </>
  );
}
