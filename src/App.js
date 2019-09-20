import React, {Component} from 'react';
import './App.css';
import Circles from './Circles/Circles';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class App extends Component {

  state = {
    score: 0,
    current: 0
  };

  pace = 1500;
  timer = undefined;

  next = () => {

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1,4);
      } while (nextActive === this.state.current);

    this.setState({
      current:nextActive,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next.bind(this), this.pace);

    console.log(this.state.current);

  }

  clickHandler = (btnId) => {
    console.log('wow', btnId);

    this.setState( {
     
        score: this.state.score + 1
      })
  }

  startHandler = () => {
    this.next();
  }

  render() {
    return (
    <div className="App">
      <h1>Nopeuspeli</h1>
      <p>Your score is: {this.state.score}</p>
      <Circles 
          buttonColor= '#A2FFBA'
          active={this.state.current === 1}
          click={() => this.clickHandler(1)}
      />
      <Circles 
          buttonColor= '#FF57FF'
          active={this.state.current === 2}
          click={() => this.clickHandler(2)}
      />
      <Circles 
          buttonColor= '#EBE98A'
          active={this.state.current === 3}
          click={() => this.clickHandler(3)}
          />
      <Circles 
          buttonColor= '#61EBE5'
          active={this.state.current === 4}
          click={() => this.clickHandler(4)}
          />

      <div> 
        <button onClick={this.startHandler}>Start Game</button>
        <button>End Game</button>
      </div>
     
    </div>
  );
}};

export default App;
