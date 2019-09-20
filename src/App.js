import React, {Component} from 'react';
import './App.css';
import Circles from './Circles/Circles';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class App extends Component {

  state = {
    score: 0
  };

  clickHandler = (btnId) => {
    console.log('wow', btnId);

    this.setState( {
     
        score: this.state.score + 1
      })
  }

  render() {
    return (
    <div className="App">
      <h1>Nopeuspeli</h1>
      <p>Your score is: {this.state.score}</p>
      <Circles click={() => this.clickHandler(1)}/>
      <Circles click={() => this.clickHandler(2)}/>
      <Circles click={() => this.clickHandler(3)}/>
      <Circles click={() => this.clickHandler(4)}/>

      <div> 
        <button>Start Game</button>
        <button>End Game</button>
      </div>
     
    </div>
  );
}};

export default App;
