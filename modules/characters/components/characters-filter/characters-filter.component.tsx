import { Chips } from "common/components";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { CharacterGender } from "../../apis/enums/character-gender.enum";
import { CharactersFilterProperties } from "./characters-filter-properties.interface";

export const CharactersFilter = ({ onChange }: CharactersFilterProperties) => {
  const [query, setQuery] = useState("");
  const [inputValue] = useDebounce(query, 1000);
  const [selectedGender, setSelectedGender] = useState<string>();

  useEffect(() => {
    onChange({
      query: inputValue,
      gender: selectedGender,
    });
  }, [inputValue]);

  const onGenderClick = (caption?: string) => {
    setSelectedGender(caption);

    onChange({
      query: inputValue,
      gender: caption?.toLowerCase(),
    });
  };

  return (
    <div className="flex items-center justify-between gap-2 pb-2">
      <input
        className="bg-slate-800 p-2 rounded-xl"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex gap-2 overflow-x-auto">
        <Chips
          caption="All"
          onClick={() => onGenderClick(undefined)}
          isActive={!selectedGender}
        />
        {Object.keys(CharacterGender)?.map((gender) => (
          <Chips
            key={`filter-${gender}`}
            caption={gender}
            onClick={onGenderClick}
            isActive={selectedGender === gender}
          />
        ))}
      </div>
    </div>
  );
};
