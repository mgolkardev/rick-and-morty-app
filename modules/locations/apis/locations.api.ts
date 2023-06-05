import { axiosClient } from "common/utils/axios-client";
import { ResultSet } from "common/interfaces/result-set.interface";
import { LocationDto } from "./dtos/location.dto";
import { LocationFilterDto } from "./dtos/location-filter.dto";

export const getLocations = async (
  page?: number,
  filters?: LocationFilterDto
) => {
  const { data } = await axiosClient.get<ResultSet<LocationDto[]>>(
    `/location`,
    {
      params: {
        page,
        name: filters?.query,
      },
    }
  );

  return data;
};
