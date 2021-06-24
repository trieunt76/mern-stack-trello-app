import React from 'react';
import './App.scss';
import AppBar from 'components/AppBar';
import BoardBar from 'components/BoardBar';
import BoardContent from 'components/BoardContent';

const App = () => {
    return (
        <div className="main-wrapper">
            <AppBar />
            <BoardBar />
            <BoardContent />
        </div>
    );
};

export default App;
