"use client";

import { useState } from "react";
import { useLocations } from "./hooks/locations.hook";
import { Grid, Link } from "common/components";
import { LocationsFilter } from "./components/locations-filter/locations-filter.component";
import { MapPinIcon } from "@heroicons/react/24/outline";

export const LocationsModule = () => {
  const [page, setPage] = useState<number>();
  const [filters, setFilters] = useState<string>();

  const { data, isLoading, error } = useLocations(page, { query: filters });

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Locations</h1>

      <LocationsFilter
        onChange={(selected) => {
          setFilters(selected);
        }}
      />

      <Grid
        className="bg-slate-800 p-5 rounded-2xl"
        isLoading={isLoading}
        error={(!isLoading && !data) || !!error}
        pagination={{
          currentPage: page,
          totalPages: data?.info?.pages ?? 0,
          onChange: (page) => {
            setPage(page);
          },
        }}
      >
        {data?.results?.map((location) => (
          <Link key={location.id} href={`/locations/${location.id}`}>
            <div className="flex items-center gap-4">
              <MapPinIcon width={48} />
              <span className="flex flex-col gap-2">
                <span className="text-gray-400">{location.name}</span>
                <span className="text-gray-400 text-xs">{location.type}</span>
              </span>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  );
};
