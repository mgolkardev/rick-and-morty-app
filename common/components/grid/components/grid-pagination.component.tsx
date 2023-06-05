import classNames from "classnames";
import { GridPaginationProperties } from "./grid-pagination-properties.interface";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export const GridPagination = ({
  totalPages,
  currentPage = 1,
  onChange,
}: GridPaginationProperties) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  const onPrevPageClick = () => {
    if (!hasPrevPage) return;

    if (onChange) {
      onChange(currentPage - 1);
    }

    scrollToTop();
  };

  const onNextPageClick = () => {
    if (!hasNextPage) return;

    if (onChange) {
      onChange(currentPage + 1);
    }

    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center sm:justify-end">
      <i
        className={classNames("text-gray-600 p-2 cursor-pointer", {
          "text-gray-800": !hasPrevPage,
        })}
        onClick={() => onPrevPageClick()}
      >
        <ArrowLeftCircleIcon width={24} />
      </i>
      <i className={classNames("text-gray-600 p-2 not-italic font-mono")}>
        {currentPage}/{totalPages}
      </i>
      <i
        className={classNames("text-gray-600 p-2 cursor-pointer", {
          "text-gray-800": !hasNextPage,
        })}
        onClick={() => onNextPageClick()}
      >
        <ArrowRightCircleIcon width={24} />
      </i>
    </div>
  );
};
