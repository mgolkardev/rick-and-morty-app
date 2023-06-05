import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { LocationsFilterProperties } from "./locations-filter-properties.interface";

export const LocationsFilter = ({ onChange }: LocationsFilterProperties) => {
  const [query, setQuery] = useState("");
  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className="flex items-center justify-between pb-2">
      <input
        className="bg-slate-800 p-2 rounded-xl"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
