/*global setTimeout*/
/*global clearTimeout*/
import React from 'react';
import ReactDOM from 'react-dom';

import Board from '../model/Board.js';
import AI from '../model/AI.js';
import Game from '../view/Game.jsx';

export default class {
  constructor(target) {
    this.board = new Board();
    this.userMarker = 'o';
    this.AIMarker = 'x';
    this.RESET_DELAY = 3000;
    this.AI = new AI(this.board, this.userMarker, this.AIMarker);
    this.timer = null;
    this.initialMessage = 'Select X or O, and click a spot to begin.';

    ReactDOM.render(
      <Game handleClick={this.handleClick.bind(this)}
        initialBoard={this.getNestedArrayBoard()}
        canChangeUser={true}
        initialMessage={this.initialMessage}/>,
      target
    );
  }

  resetGame(gameView) {
    this.board.clear.call(this.board);
    gameView.setState({board: this.getNestedArrayBoard()});
    gameView.setState({canChangeUser: true});
    gameView.setState({message: this.initialMessage});
  }

  getEndGameMesage() {
    var drawString = 'The game is a draw.';
    var winnerString = ' wins.';
    return (this.board.winner === this.board.NOBODY) ? drawString :
      this.board.winner.toUpperCase() + winnerString;
  }

  handleClick(gameView, row, column) {
    var index = 3*row + column;
    if(this.board.isGameComplete.call(this.board)) {
      if(this.timer) {
        clearTimeout(this.timer);
      }
      this.resetGame(gameView);
      return;
    }
    if(!this.board.isBlank.call(this.board, index)) { // cell already taken
      return;
    }

    this.board.setCell(index, gameView.state.userMarker);
    gameView.setState({canChangeUser: false});
    gameView.setState({message: 'Continue playing.'});
    this.AIMarker = this.getOpponent(gameView.state.userMarker);
    this.AI.setAI(this.AIMarker);
    this.board.setCell(this.AI.getNextCell.call(this.AI), this.AIMarker);
    this.board.checkDraw();
    this.board.checkWinner();
    gameView.setState({board: this.getNestedArrayBoard()});
    if(this.board.isGameComplete.call(this.board)) {
      gameView.setState({message: 'Game over. ' + this.getEndGameMesage()});
      this.timer =
        setTimeout(this.resetGame.bind(this, gameView), this.RESET_DELAY);
    }
  }

  getOpponent(user) {
    return user === 'o' ? 'x' : 'o';
  }

  getNestedArrayBoard() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
      arr.push([]);
      for(var j = 0; j < 3; j++) {
        arr[i].push({
          value: this.board.board[3*i+j],
          highlight: this.board.isWinningSpot.call(this.board,3*i+j)
        });
      }
    }
    return arr;
  }
}
