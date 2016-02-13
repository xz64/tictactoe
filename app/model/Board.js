export default class {
  constructor(board) {
    this.board = board || [null, null, null, null, null, null, null, null,
      null];
    this.NOBODY = ''; // used to indicate a tie
    this.winner = null;
    this.winningSpots = null;
  }

  isBlank(index) {
    return this.board[index] === null;
  }

  isWinningSpot(index) {
    if(!this.winner) {
      return false;
    }
    return this.winningSpots.indexOf(index) > -1;
  }

  setCell(index, value) {
    this.board[index] = value;
  }

  clearCell(index) {
    this.board[index] = null;
  }
  
  clear() {
    for(var i = 0; i < this.board.length; i++) {
      this.clearCell(i);
    }
    this.clearWinner();
  }

  clearWinner() {
    this.winner = null;
    this.winningSpots = null;
  }

  isEqual(a, b) {
    return this.board[a] === this.board[b];
  }

  isFull() {
    for(var i = 0; i < this.board.length; i++) {
      if(this.isBlank(i)) {
        return false;
      }
    }

    return true; // no blank cells by this point
  }

  check3Win(a, b, c) {
    let winnerExists = !this.isBlank(a) && this.isEqual(a,b) &&
      this.isEqual(b,c);
    if(winnerExists) {
      this.winner = this.board[a];
      this.winningSpots = [a, b, c];
    }
    return winnerExists;
  }

  checkDiagonalWin() {
    return this.check3Win(0,4,8) || this.check3Win(2,4,6);
  }

  checkColumnWin() {
    return this.check3Win(0,3,6) || this.check3Win(1,4,7) ||
      this.check3Win(2,5,8);
  }

  checkRowWin() {
    return this.check3Win(0,1,2) || this.check3Win(3,4,5) ||
      this.check3Win(6,7,8);
  }

  checkWinner() {
    return this.checkDiagonalWin() || this.checkColumnWin() ||
      this.checkRowWin();
  }

  checkDraw() {
    let isDraw = this.isFull() && !this.checkWinner();
    if(isDraw) {
      this.winner = this.NOBODY;
    }
    return isDraw;
  }

  isGameComplete() {
    this.checkWinner();
    this.checkDraw();
    return this.winner !== null;
  }
}
