import { axiosClient } from "common/utils/axios-client";
import { LocationDto } from "../../locations/apis/dtos/location.dto";

export const getLocation = async (id: number) => {
  const { data } = await axiosClient.get<LocationDto>(`/location/${id}`);

  return data;
};
