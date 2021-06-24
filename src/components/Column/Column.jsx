import React from 'react';
import './Column.scss';
import Task from 'components/Task';

const Column = () => {
    return (
        <div className="board">
            <div className="board__header">Title board</div>
            <ul className="board__list">
                <li className="board__list-item">
                    <img
                        alt="todo"
                        src="https://images.unsplash.com/photo-1522199670076-2852f80289c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
                    />
                    Title: Todo list
                </li>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </ul>
            <div className="board__footer">Footer</div>
        </div>
    );
};

export default Column;
