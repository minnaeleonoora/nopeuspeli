import React, {Component} from './node_modules/react';
import './GameOver.css';

class GameOver extends Component {

render(){
    return (
    <div id="result">
        <div className="gameover">
            <div id="gameoverbox">
                <p>Game Over!</p>
                <button>Close</button>
            </div>
        
        </div>
    </div>
    )
    }
}



export default GameOver;