import React from 'react';
import './GameOver.css';

const GameOver = () => {
    return (
    <div id="result">
        <div className="gameoverbox">
            <p id="gameover">Game Over! Your final score was: </p>
                <button>Close</button>
            </div>
        </div>
    );   
}



export default GameOver;