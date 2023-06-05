import React from "react";
import { CharacterCarousel } from "../../characters/components/characters-carousel/characters-carousel.component";
import { LocationsCarousel } from "../../locations/components/locations-carousel.component";
import Image from "next/image";

export const metadata = {
  title: "Rick and Morty App",
};

const HomePage = () => {
  return (
    <div>
      <div className="aspect-video w-full relative mb-12 ">
        <Image
          src="/images/banner.jpg"
          alt="Rick and Morty"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <CharacterCarousel />
      <LocationsCarousel />
    </div>
  );
};

export default HomePage;
