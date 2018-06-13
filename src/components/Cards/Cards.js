import React from "react";
import "./Cards.css";

const Cards = ({ name, image, onClick, id }) =>
    <img
        className="click-item"
        id={id}
        src={image}
        alt={name}
        name={name}
        onClick={onClick}
    />;

export default Cards;