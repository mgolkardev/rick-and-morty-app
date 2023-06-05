import { CharacterFilterDto } from "../../apis/dtos/character-filter.dto";

export interface CharactersFilterProperties {
  onChange: (selected: CharacterFilterDto) => void;
}
