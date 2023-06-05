"use client";

import { useTransition } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFillIcon } from "@heroicons/react/24/solid";
import { FavoriteIconProperties } from "./favorite-icon-properties.interface";
import { removeCookie, setCookie } from "common/helpers/cookie.helper";

export const FavoriteIcon = ({ character, theme }: FavoriteIconProperties) => {
  let [isPending, startTransition] = useTransition();

  const onFavoriteClick = () => {
    if (!character) return;

    startTransition(() => {
      if (theme === character.name) {
        removeCookie();
      } else {
        setCookie(character.name);
      }
    });
  };

  return (
    <span onClick={onFavoriteClick} className="cursor-pointer">
      {theme === character?.name ? (
        <HeartFillIcon width={24} height={24} className="fill-red-600" />
      ) : (
        <HeartIcon width={24} height={24} />
      )}
    </span>
  );
};
