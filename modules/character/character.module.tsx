"use client";

import { useCharacter } from "./hooks/character.hook";
import Image from "next/image";
import { EpisodeCarousel } from "../episodes/components/episodes-carousel/episodes-carousel.component";
import { FavoriteIcon } from "./components/favorite-icon/favorite-icon.component";
import { CharacterModuleProperties } from "./character-properties.interface";
import { notFound } from "next/navigation";

export const CharacterModule = ({ id, theme }: CharacterModuleProperties) => {
  const { data, isLoading, error } = useCharacter(id);

  if (isLoading) {
    return <></>;
  }

  if (error || !data) {
    notFound();
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6 flex items-center gap-2">
        {data.name}
        <FavoriteIcon character={data} theme={theme} />
      </h1>

      <div className="flex items-center gap-4">
        <Image src={data.image} alt={data.name} width={48} height={48} />

        <span className="flex flex-col gap-2">
          <span className="text-gray-400">
            Gender: <b>{data.gender}</b>
          </span>
          <span className="text-gray-400">
            Status: <b>{data.status}</b>
          </span>
        </span>

        <span className="flex flex-col gap-2">
          <span className="text-gray-400">
            Species: <b>{data.species}</b>
          </span>

          <span className="text-gray-400">
            Location: <b>{data.location.name}</b>
          </span>
        </span>
      </div>

      <EpisodeCarousel urls={data.episode} />
    </div>
  );
};
