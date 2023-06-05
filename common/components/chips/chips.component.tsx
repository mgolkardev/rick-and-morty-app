import classNames from "classnames";
import { ChipsProperties } from "./chips-properties.interface";

export const Chips = ({
  caption,
  isActive,
  className,
  onClick,
}: ChipsProperties) => {
  return (
    <span
      onClick={() => {
        if (onClick) {
          onClick(caption);
        }
      }}
      className={classNames(
        "px-3 py-1 border border-gray-100 cursor-pointer rounded-full bg-slate",
        {
          "!bg-blue-700 text-white": isActive,
        },
        className
      )}
    >
      {caption}
    </span>
  );
};
