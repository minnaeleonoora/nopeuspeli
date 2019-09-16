import React, {Component} from 'react';
import "./Circles.css";

class Circles extends Component {


    render() {
        return (
            <div className="container">
                <p className="score">Score: 0</p>
                <div className="circle" id="a">
                <p className="number">A</p>
                </div>
                <div className="circle" id="b">
                <p className="number">B</p>
                </div>
                <div className="circle" id="c">
                <p className="number">C</p>
                </div>
                <div className="circle" id="d">
                <p className="number">D</p>
                </div>
            <div className="buttons">
                <button onClick>START GAME</button>
                <button onClick>STOP GAME</button>
                
            </div>
            </div>
        )
    }
}

export default Circles;