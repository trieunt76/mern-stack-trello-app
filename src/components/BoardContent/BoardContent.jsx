import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import './BoardContent.scss';
import Column from 'components/Column';
import initialData from 'mocks';
import { mapOrder } from 'utilities';

const BoardContent = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const data = initialData.boards.find((board) => board.id === 'board-1');
        if (data) {
            setBoard(data);

            // Sort

            setColumns(mapOrder(data.columns, data.columnOrder, 'id'));
        }
    }, []);

    if (isEmpty(board)) {
        return <div>No Board</div>;
    }

    return (
        <div className="main-content">
            {columns.map((item, index) => {
                return <Column key={index} {...item} />;
            })}
        </div>
    );
};

export default BoardContent;
