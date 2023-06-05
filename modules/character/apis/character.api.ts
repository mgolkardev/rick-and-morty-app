import { axiosClient } from "common/utils/axios-client";
import { CharacterDto } from "../../characters/apis/dtos/character.dto";

export const getCharacter = async (id: number) => {
  const { data } = await axiosClient.get<CharacterDto>(`/character/${id}`);

  return data;
};
