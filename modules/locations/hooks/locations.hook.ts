import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../apis/locations.api";
import { LocationFilterDto } from "../apis/dtos/location-filter.dto";

export const useLocations = (page?: number, filters?: LocationFilterDto) => {
  return useQuery(["locations", page, filters], () =>
    getLocations(page, filters)
  );
};
