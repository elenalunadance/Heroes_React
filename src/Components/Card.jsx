import React from "react";
import '../styles/card.css'

class Card extends React.Component {
    render() {
				const {name, universe, alterego, occupation, friends, superpowers, url, info} = this.props;
        return (
            <div className="card">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">Вселенная: {universe}, <br />Альтер эго: {alterego}, <br />Род деятельности: {occupation}, <br />Друзья: {friends}, <br />Суперсила: {superpowers}</p>
                <img className="card-img" src={url} alt={name}/>
            </div>
        );
    }
}

export default Card;