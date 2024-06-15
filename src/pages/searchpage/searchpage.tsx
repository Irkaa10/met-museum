import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useSearchQuery,
  useObjectDetailsQueries,
} from "../../queries/useSearchQuery";
import { ObjectDetail } from "../../types";
import "./searchpage.css";

function Searchpage() {
  const [page, setPage] = useState(1);
  const limit = 12;
  const { searchQuery } = useParams();

  if (!searchQuery) throw new Error("object id is null");

  const searchQueryResult = useSearchQuery(searchQuery);
  const objectDetailsQuery = useObjectDetailsQueries(
    searchQueryResult.data?.objectIDs || [],
    page,
    limit
  );

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <div>
        <h1>Search Results for: {searchQuery}</h1>
      </div>
      <div>
        {objectDetailsQuery.data?.map((object: ObjectDetail) => (
          <div key={object.objectID}>
            <img src={object.primaryImageSmall} alt={object.title} />
            <p>{object.title}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <button
        onClick={handleNextPage}
        disabled={
          objectDetailsQuery.data && objectDetailsQuery.data.length < limit
        }
      >
        Next
      </button>
    </div>
  );
}

export default Searchpage;
