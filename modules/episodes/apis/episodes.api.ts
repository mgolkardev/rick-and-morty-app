import { axiosClient } from "common/utils/axios-client";
import { EpisodeDto } from "./dtos/episode";

export const getEpisodesById = async (ids: number[]) => {
  const { data } = await axiosClient.get<EpisodeDto[]>(
    `/episode/${ids.join(",")}`
  );

  return Array.isArray(data) ? data : [data];
};
