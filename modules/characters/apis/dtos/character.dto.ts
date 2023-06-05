import { CharacterGender } from "../enums/character-gender.enum";
import { CharacterStatus } from "../enums/character-status.enum";

export interface CharacterDto {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
