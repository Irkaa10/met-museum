import "./objectCard.css"

interface objectCardProps {
    imageUrl: string;
    objectName: string;
}

function ObjectCard(props: objectCardProps) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt=""  className="card-image"/>
            <h2>{props.objectName}</h2>
        </div>
    )
}

export default ObjectCard;