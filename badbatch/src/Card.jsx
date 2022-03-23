import React from "react";
import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <div className="imageBlock"><img className="image" src={props.imgLink} alt={props.title} /></div>
            <div className="content">{props.content}</div>
        </div>
    );

}

export default Card;