import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../apis/character.api";

export const useCharacter = (id: number) => {
  return useQuery(["character", id], () => getCharacter(id));
};
