import React from "react";
import "./style.css";

function FoodCard(props) {
    return (

        <div className="card">
            <div className="img-container">
                <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickCount(props.id)} />
            </div>
        </div>
    );
}

export default FoodCard;
