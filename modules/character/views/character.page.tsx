import React from "react";
import { CharacterModule } from "../character.module";
import { getCookie } from "common/helpers/cookie.helper";
import { getCharacters } from "../../characters/apis/characters.api";
import { Metadata } from "next";
import { getCharacter } from "../apis/character.api";
import { RouterParams } from "common/interfaces/router-params.interface";
import { CharacterPageProperties } from "./character-properties.interface";

const CharacterPage = async ({ params: { id } }: CharacterPageProperties) => {
  const theme = await getCookie();

  return <CharacterModule id={id} theme={theme} />;
};

export default CharacterPage;

// generate SSG static params
export async function generateStaticParams() {
  const characters = await getCharacters();

  return (
    characters.results?.map((character) => ({
      id: character.id.toString(),
    })) ?? []
  );
}
//

// generate dynamic metadata
export async function generateMetadata({
  params: { id },
}: RouterParams<{ id: number }>): Promise<Metadata> {
  const character = await getCharacter(id);

  return {
    title: character.name,
  };
}
//
