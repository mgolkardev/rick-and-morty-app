import classNames from "classnames";
import { GridPagination } from "./components/grid-pagination.component";
import { GridProperties } from "./grid-properties.interface";
import { GRID_DEFAULT_ITEM_NUMBER } from "./grid.constant";

export const Grid = ({
  className,
  isLoading,
  error,
  pagination,
  children,
}: GridProperties) => {
  const getDefaultRowNumber = (length: number) => {
    return Array.from({ length }, (v, k) => k + 1);
  };

  const showPagination = pagination && pagination.totalPages > 1;

  // placeholders
  const renderPlaceholders = () =>
    getDefaultRowNumber(GRID_DEFAULT_ITEM_NUMBER)?.map((itemNumber) => (
      <div
        key={`table-tr-placeholder-${itemNumber}`}
        className="flex items-center"
      >
        <span className="block bg-slate-900 rounded-md w-xlarge h-xlarge"></span>
        <div className="p-2 flex-1">
          <span className="block bg-slate-900 rounded-xl w-full h-medium"></span>
          <span className="block bg-slate-900 rounded-xl w-xlarge h-medium mt-1"></span>
        </div>
      </div>
    ));
  //

  if (error) {
    return (
      <div className={classNames("text-center", className)}>No Result</div>
    );
  }

  return (
    <>
      <div
        className={classNames(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10",
          className
        )}
      >
        {isLoading ? renderPlaceholders() : children}
      </div>

      {showPagination && <GridPagination {...pagination} />}
    </>
  );
};
