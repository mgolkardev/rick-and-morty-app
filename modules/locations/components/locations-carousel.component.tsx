"use client";

import { ArrowSmallRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useLocations } from "../hooks/locations.hook";
import { Carousel, Link } from "common/components";

export const LocationsCarousel = () => {
  const { data, isLoading } = useLocations();

  if (!isLoading && data?.results?.length === 0) {
    return <></>;
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">Locations</h1>
        <Link href="/locations" className="text-gray-500 flex items-center">
          Show All
          <ArrowSmallRightIcon width={16} />
        </Link>
      </div>
      <Carousel className="bg-slate-800 p-5 rounded-2xl" isLoading={isLoading}>
        {data?.results?.map((location) => (
          <Link
            key={location.id}
            href={`/locations/${location.id}`}
            className="text-center flex flex-col gap-2 items-center justify-center"
          >
            <MapPinIcon width={48} />
            {location.name}
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
