import React from 'react';
import './Column.scss';
import Card from 'components/Card';
import { mapOrder } from 'utilities';

const Column = ({ title, cards, cardOrder }) => {
    const cardsList = mapOrder(cards, cardOrder, 'id');
    return (
        <div className="board">
            <div className="board__header">{title}</div>
            <ul className="board__list">
                {cardsList &&
                    cardsList.map((item, index) => {
                        return <Card key={index} {...item} />;
                    })}
            </ul>
            <div className="board__footer">Footer</div>
        </div>
    );
};

export default Column;
