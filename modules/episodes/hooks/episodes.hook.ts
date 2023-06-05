import { useQuery } from "@tanstack/react-query";
import { getEpisodesById } from "../apis/episodes.api";

export const useEpisodesById = (ids: number[]) => {
  return useQuery(["episodes", ids], () => getEpisodesById(ids));
};
