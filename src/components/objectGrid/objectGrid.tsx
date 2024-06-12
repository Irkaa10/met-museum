import ObjectCard from "../objectCard/objectCard";
import "./objectGrid.css"

function ObjectGrid() {
    return (
        <div className="grid-container">
            <div className="grid">
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
            </div>
        </div>
    )
}

export default ObjectGrid;