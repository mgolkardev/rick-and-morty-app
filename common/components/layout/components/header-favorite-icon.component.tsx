"use client";

import { useTransition } from "react";
import { removeCookie } from "common/helpers/cookie.helper";
import { HeartIcon } from "@heroicons/react/24/solid";

export const HeaderFavoriteIcon = () => {
  let [isPending, startTransition] = useTransition();

  return (
    <button onClick={() => startTransition(() => removeCookie())}>
      <HeartIcon width={16} height={16} className="fill-red-600" />
    </button>
  );
};
