export interface ResultSet<T> {
  results?: T;
  info?: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
}
