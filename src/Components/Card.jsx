import React from "react";
import '../styles/card.css'

const Card = (props) => {
    return (
        <div className="card">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">
                Вселенная: {props.universe}, <br />
                Альтер эго: {props.alterego}, <br />
                Род деятельности: {props.occupation}, <br />
                Друзья: {props.friends}, <br />
                Суперсила: {props.superpowers}
            </p>
            <img className="card-img" src={props.url} alt={props.name} />
        </div>
    );
};

export default Card;