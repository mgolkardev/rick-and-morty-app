"use client";

import { useState } from "react";
import { useCharacters } from "./hooks/characters.hook";
import { Grid, Link } from "common/components";
import Image from "next/image";
import { CharactersFilter } from "./components/characters-filter/characters-filter.component";

export const CharacterModule = () => {
  const [page, setPage] = useState<number>();
  const [filters, setFilters] = useState<{
    query?: string;
    gender?: string;
  }>({});

  const { data, isLoading, error } = useCharacters(page, filters);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Characters</h1>

      <CharactersFilter
        onChange={(selected) => {
          setFilters(selected);
        }}
      />

      <Grid
        className="bg-slate-800 p-5 rounded-2xl"
        isLoading={isLoading}
        error={(!isLoading && !data) || !!error}
        pagination={{
          currentPage: page,
          totalPages: data?.info?.pages ?? 0,
          onChange: (page) => {
            setPage(page);
          },
        }}
      >
        {data?.results?.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <div className="flex items-center gap-4">
              <Image
                src={character.image}
                alt={character.name}
                width={48}
                height={48}
              />
              <span className="flex flex-col gap-2">
                <span className="text-gray-400">{character.name}</span>
                <span className="text-gray-400 text-xs">
                  {character.status}
                </span>
              </span>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  );
};
