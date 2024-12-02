"use client"; // Mark this as a Client Component

import Image from "next/image";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const artworks1 = [
  {
    title: "Strawberry Seeds",
    imageUrl: "/images/portfolio/strawberry.png",
  },
  {
    title: "Gelato",
    imageUrl: "/images/portfolio/gelato.png",
  },
  
];

const artworks2 = [
  {
    title: "Dizzy",
    imageUrl: "/images/portfolio/dizzy.png",
  },
  {
    title: "Catto",
    imageUrl: "/images/portfolio/cat.png",
  },
  
  {
    title: "Bunny",
    imageUrl: "/images/portfolio/bunny.jpeg",
  },
];

const artworks3 = [
  {
    title: "Bat",
    imageUrl: "/images/portfolio/bat.png",
  },
];

export default function PortfolioPage() {
  useEffect(() => {
    // Initialize theme-change only in the browser
    themeChange(false); // Set false to disable logging
  }, []);

  return (
    <div className="py-8 text-center">
      <div className="flex justify-center mb-8">
        <div className="lollipop mx-16 my-auto" ></div>
        <h1 className="text-4xl font-bold mb-auto mt-auto">My Portfolio</h1>
        <div className="lollipop mx-16 my-auto" >
        </div>
      </div><p className="text-lg text-gray-600 mb-8">
        Explore my collection of artwork showcasing bla bla bla.
      </p>

      <div className="flex justify-center bg-secondary ">
        {artworks2.map((art) => (
          <Image
            key={art.title}
            src={art.imageUrl}
            alt={art.title}
            width={300}
            height={300}
            className="rounded-lg object-cover mx-10 my-10"
          />
        ))}
      </div>
      <div className="flex justify-center">
        {artworks1.map((art) => (
          <div key={art.title} className="flex justify-center bg-neutral rounded-lg m-6">
            <Image
              src={art.imageUrl}
              alt={art.title}
              width={400}
              height={400}
              className="rounded-lg object-cover mx-5 my-5"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {artworks3.map((art) => (
          <div key={art.title} className="flex justify-center bg-neutral rounded-lg m-6">
            <Image
              src={art.imageUrl}
              alt={art.title}
              width={300}
              height={300}
              className="rounded-lg object-cover mx-5 my-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
