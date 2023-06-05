import React from "react";
import { LocationModule } from "../location.module";
import { getLocations } from "../../locations/apis/locations.api";
import { getLocation } from "../apis/location.api";
import { Metadata } from "next";
import { RouterParams } from "common/interfaces/router-params.interface";
import { LocationPageProperties } from "./location-properties.interface";

export const LocationPage = ({ params: { id } }: LocationPageProperties) => {
  return <LocationModule id={id} />;
};

export default LocationPage;

// generate SSG static params
export async function generateStaticParams() {
  const locations = await getLocations();

  return (
    locations.results?.map((location) => ({
      id: location.id.toString(),
    })) ?? []
  );
}
//

// generate dynamic metadata
export async function generateMetadata({
  params: { id },
}: RouterParams<{ id: number }>): Promise<Metadata> {
  const character = await getLocation(id);

  return {
    title: character.name,
  };
}
//
