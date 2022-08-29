import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squres: Array(9).fill(null),
      count: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? 'X' : 'O';
    for (let i = 0; i< 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.squres[line[0]] === s 
        && this.state.squres[line[1]] === s
        && this.state.squres[line[2]] === s) {
          alert(s + ' win');
          setTimeout(() => {
            this.setState({ squares : Array(9).fill(null) });
            this.setState({ count : 0 });
          }, 3000)
      }
    }
  }

  clickHandler = event => {
    // data - номер квадрата по которому кликнули
   let data = event.target.getAttribute('data');
   let currentSquares = this.state.squres;
   if (currentSquares[data] === null) {
   currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O'
   this.setState({ count: this.state.count + 1 });
   this.setState({ squares: currentSquares });
  }
  else {
    alert('так нельзя :)');
  }
  this.isWinner();
}
  render() {
    return (
      <div className = "tic-tac-toe">
        <div className='ttt-grid' onClick={this.clickHandler} data='0'>{this.state.squres[0]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='1'>{this.state.squres[1]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='2'>{this.state.squres[2]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='3'>{this.state.squres[3]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='4'>{this.state.squres[4]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='5'>{this.state.squres[5]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='6'>{this.state.squres[6]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='7'>{this.state.squres[7]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='8'>{this.state.squres[8]}</div>
        
      </div>
    )
  }

}

export default App;
