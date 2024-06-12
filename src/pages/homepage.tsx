import Menubar from "../components/menubar/menubar";
import ObjectCard from "../components/objectCard/objectCard";
import {
  useHighlightQuery,
  useObjectDetailsQueries,
} from "../queries/useHighlightQuery";
import "./homepage.css";

function Homepage() {
  const highlightQuery = useHighlightQuery();
  const objectDetailsQuery = useObjectDetailsQueries(
    highlightQuery.data?.objectIDs || []
  );

  return (
    <>
      <Menubar />
      <div className="grid-container">
        <div className="grid">
          {objectDetailsQuery.data?.map((object) => (
            <ObjectCard
              key={object.objectID}
              imageUrl={object.primaryImageSmall}
              objectName={object.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
