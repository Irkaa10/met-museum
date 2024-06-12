import { useQuery } from "@tanstack/react-query";
import { ObjectDetail } from "../types";

interface objectListResponse {
  total: number;
  objectIDs: number[];
}

export function useHighlightQuery() {
  return useQuery({
    queryKey: ["highlight-object-list"],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=*`
      );
      const json = (await response.json()) as objectListResponse;

      // Shuffle the objectIDs array
      const shuffledObjectIDs = json.objectIDs.sort(() => 0.5 - Math.random());

      // Take the first 10 items from the shuffled array
      const selectedObjectIDs = shuffledObjectIDs.slice(0, 9);

      return {
        total: json.total,
        objectIDs: selectedObjectIDs,
      };
    },
    staleTime: Infinity,
  });
}

export function useObjectDetailsQueries(objectIDs: number[]) {
  return useQuery({
    queryKey: objectIDs.map((objectID) => ["homepage-object-detail", objectID]),
    queryFn: async () => {
      const responses = await Promise.all(
        objectIDs.map(async (objectID) => {
          const response = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
          );
          return response.json();
        })
      );
      return responses as ObjectDetail[];
    },
  });
}
