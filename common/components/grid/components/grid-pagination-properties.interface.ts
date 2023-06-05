export interface GridPaginationProperties {
  totalPages: number;
  currentPage?: number;
  onChange?: (page: number) => void;
}
