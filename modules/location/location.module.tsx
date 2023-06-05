"use client";
import { useLocation } from "./hooks/location.hook";
import { CharacterCarousel } from "../characters/components/characters-carousel/characters-carousel.component";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";
import { LocationModuleProperties } from "./location-properties.interface";

export const LocationModule = ({ id }: LocationModuleProperties) => {
  const { data, isLoading, error } = useLocation(id);

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
      </h1>

      <div className="flex items-center gap-4">
        <MapPinIcon width={48} />
        <span className="flex flex-col gap-2">
          <span className="text-gray-400">
            Type: <b>{data.type}</b>
          </span>
          <span className="text-gray-400">
            Dimension: <b>{data.dimension}</b>
          </span>
        </span>
      </div>

      <CharacterCarousel urls={data.residents} />
    </div>
  );
};
