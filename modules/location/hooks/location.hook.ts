import { useQuery } from "@tanstack/react-query";
import { getLocation } from "../apis/location.api";

export const useLocation = (id: number) => {
  return useQuery(["location", id], () => getLocation(id));
};
