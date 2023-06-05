"use client";

import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useCharactersById } from "../../hooks/characters.hook";
import { Carousel, Link } from "common/components";
import Image from "next/image";
import { CharacterCarouselProperties } from "./characters-carousel-properties.interface";
import { getIdFromUrls } from "common/helpers/url.helper";

export const CharacterCarousel = ({ urls }: CharacterCarouselProperties) => {
  const { data, isLoading } = useCharactersById(getIdFromUrls(urls));

  if (!isLoading && data?.length === 0) {
    return <></>;
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">Characters</h1>
        {!urls && (
          <Link href="/characters" className="text-gray-500 flex items-center">
            Show All
            <ArrowSmallRightIcon width={16} />
          </Link>
        )}
      </div>
      <Carousel className="bg-slate-800 p-5 rounded-2xl" isLoading={isLoading}>
        {data?.map((character) => (
          <Link
            key={character.id}
            href={`/characters/${character.id}`}
            className="text-center flex flex-col gap-2 items-center justify-center"
          >
            <Image
              src={character.image}
              alt={character.name}
              width={48}
              height={48}
            />
            {character.name}
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
