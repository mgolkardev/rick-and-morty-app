import { useQuery } from "@tanstack/react-query";
import { getCharacters, getCharactersById } from "../apis/characters.api";

export const useCharacters = (
  page?: number,
  filters?: {
    query?: string;
    gender?: string;
  }
) => {
  return useQuery(["characters", page, filters], () =>
    getCharacters(page, filters)
  );
};

export const useCharactersById = (ids: number[]) => {
  return useQuery(["characters-by-ids", ids], async () => {
    if (ids && ids.length > 0) return getCharactersById(ids);

    return (await getCharacters()).results;
  });
};
