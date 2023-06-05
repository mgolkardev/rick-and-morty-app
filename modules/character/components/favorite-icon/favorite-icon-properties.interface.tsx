import { CharacterDto } from "../../../characters/apis/dtos/character.dto";

export interface FavoriteIconProperties {
  character?: CharacterDto;
  theme?: string;
}
