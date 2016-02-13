import React from 'react';
import ReactDOM from 'react-dom';

import Board from '../model/Board.js';
import BoardView from '../view/Board.jsx';
import AI from '../model/AI.js';

export default class {
  constructor(target) {
    this.board = new Board();
    this.userMarker = 'o';
    this.AIMarker = 'x';
    this.AI = new AI(this.board, this.userMarker, this.AIMarker);

    ReactDOM.render(
      <BoardView handleClick={this.handleClick.bind(this)}
        initialState={{board: this.getNestedArrayBoard(), userMarker:
          this.userMarker, AIMarker: this.AIMarker}}/>,
      target
    );
  }

  handleClick(boardView, row, column) {
    var index = 3*row + column;
    if(!this.board.isBlank.call(this.board, index)) { // cell already taken
      return;
    }

    this.board.setCell(index, boardView.state.userMarker);
    this.AIMarker = boardView.state.AIMarker;
    this.AI.setAI(this.AIMarker);
    this.board.setCell(this.AI.getNextCell.call(this.AI), this.AIMarker);
    boardView.setState({board: this.getNestedArrayBoard()});
  }

  getNestedArrayBoard() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
      arr.push([]);
      for(var j = 0; j < 3; j++) {
        arr[i].push(this.board.board[3*i+j]);
      }
    }
    return arr;
  }
}
