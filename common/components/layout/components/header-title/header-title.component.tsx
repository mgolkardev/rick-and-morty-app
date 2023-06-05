import { HeaderFavoriteIcon } from "../header-favorite-icon.component";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { TitleProperties } from "./header-title-properties.interface";

export const HeaderTitle = ({ theme }: TitleProperties) => {
  return (
    <h1 className="font-bold flex items-center gap-2 text-teal-500">
      <PlayCircleIcon width={24} />
      Hello, {theme || "Guest"}
      {theme && <HeaderFavoriteIcon />}
    </h1>
  );
};
