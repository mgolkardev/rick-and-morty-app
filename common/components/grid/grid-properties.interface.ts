import { GridPaginationProperties } from "./components/grid-pagination-properties.interface";

export interface GridProperties {
  data?: any[];
  isLoading?: boolean;
  error?: boolean;
  pagination?: GridPaginationProperties;
  className?: string;
  children?: React.ReactNode;
}
