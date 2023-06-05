import { axiosClient } from "common/utils/axios-client";
import { ResultSet } from "common/interfaces/result-set.interface";
import { CharacterDto } from "./dtos/character.dto";
import { CharacterFilterDto } from "./dtos/character-filter.dto";

export const getCharacters = async (
  page?: number,
  filters?: CharacterFilterDto
) => {
  const { data } = await axiosClient.get<ResultSet<CharacterDto[]>>(
    `/character`,
    {
      params: {
        page,
        name: filters?.query,
        gender: filters?.gender,
      },
    }
  );

  return data;
};

export const getCharactersById = async (ids: number[]) => {
  const { data } = await axiosClient.get<CharacterDto[]>(
    `/character/${ids.join(",")}`
  );

  return Array.isArray(data) ? data : [data];
};
