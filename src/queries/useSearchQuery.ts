import { useQuery } from "@tanstack/react-query";
import { ObjectDetail } from "../types";

interface objectListResponse {
  total: number;
  objectIDs: number[];
}

export function useSearchQuery(query: string) {
  return useQuery({
    queryKey: [`search`, query],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
      );
      const json = await response.json();
      return json as objectListResponse;
    },
  });
}

export function useObjectDetailsQueries(
  objectIDs: number[],
  page: number,
  limit: number
) {
  // Calculate the start and end indices for the current page
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedObjectIDs = objectIDs.slice(start, end);

  return useQuery({
    queryKey: [
      "homepage-object-details",
      { objectIDs: paginatedObjectIDs, page, limit },
    ],
    queryFn: async () => {
      const responses = await Promise.all(
        paginatedObjectIDs.map(async (objectID) => {
          const response = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
          );
          return response.json();
        })
      );
      return responses as ObjectDetail[];
    },
    enabled: paginatedObjectIDs.length > 0, // Ensure the query runs only if there are objectIDs to fetch
  });
}
