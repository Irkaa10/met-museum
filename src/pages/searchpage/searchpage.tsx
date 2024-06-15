import { useParams } from "react-router-dom";
import { useSearchQuery } from "../../queries/useSearchQuery";

function Searchpage() {
    const { searchQuery } = useParams<{ searchQuery: string }>();

    if (!searchQuery) throw new Error("object id is null");

    const searchQueryResult = useSearchQuery(searchQuery);
    return (
        <>HELLOOOOOO</>
    )
}

export default Searchpage;