import React from 'react';
import './Card.scss';
const Card = ({ title, cover }) => {
    return (
        <li className="board__list-item">
            {cover && <img src={cover} alt={title} />}
            {title}
        </li>
    );
};

export default Card;
