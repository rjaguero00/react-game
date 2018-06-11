import React from "react";
import "./Cards.css";

const Cards = ({ name, image, onClick }) =>
    <img
        className="click-item"
        src={image}
        alt={name}
        name={name}
        onClick={() => onClick(name)}
    />;

export default Cards;