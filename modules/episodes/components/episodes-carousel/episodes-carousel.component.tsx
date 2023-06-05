"use client";
import { FilmIcon } from "@heroicons/react/24/outline";
import { useEpisodesById } from "../../hooks/episodes.hook";
import { Carousel, Link } from "common/components";
import { EpisodeCarouselProperties } from "./episodes-carousel-properties.interface";
import { getIdFromUrls } from "common/helpers/url.helper";

export const EpisodeCarousel = ({ urls }: EpisodeCarouselProperties) => {
  const { data, isLoading } = useEpisodesById(getIdFromUrls(urls));

  if (!isLoading && data?.length === 0) {
    return <></>;
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">Episodes</h1>
      </div>
      <Carousel className="bg-slate-800 p-5 rounded-2xl" isLoading={isLoading}>
        {data?.map((episode) => (
          <div
            key={episode.id}
            className="text-center !flex flex-col gap-2 items-center justify-center"
          >
            <FilmIcon width={48} />
            {episode.name}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
