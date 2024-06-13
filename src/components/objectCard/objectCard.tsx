import "./objectCard.css";
import { Link } from "react-router-dom";

interface objectCardProps {
  imageUrl: string;
  objectName: string;
  objectID: number;
}

function ObjectCard(props: objectCardProps) {
  return (
    <Link to={`/details/${props.objectID}`}>
      <div className="card">
        <img src={props.imageUrl} alt="" className="card-image" />
        <h2>{props.objectName}</h2>
      </div>
    </Link>
  );
}

export default ObjectCard;
