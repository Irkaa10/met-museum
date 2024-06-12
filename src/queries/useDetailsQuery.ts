import { useQuery } from "@tanstack/react-query";
import { ObjectDetail } from "../types";

export function useDetailsQuery(objectID: number) {
  return useQuery({
    queryKey: ["object-detail", objectID],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      );
      const json = await response.json();
      return json as ObjectDetail;
    },
  });
}
