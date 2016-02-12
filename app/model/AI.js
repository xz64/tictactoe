export default class {
  constructor(board, userMarker, AIMarker) {
    this.board = board;
    this.userMarker = userMarker;
    this.AIMarker = AIMarker;
  }

  getNextCell() {
    return this.getBestMove(this.AIMarker);
  }

  setAI(marker) {
    this.userMarker = this.AIMarker;
    this.AIMarker = marker;
  }

  getExtremum(scores, user) { 
    return (user === this.AIMarker) ? Math.max.apply(null, scores)
      : Math.min.apply(null, scores);
  }

  getScore(user, cell) {
    var result;
    var scores = [];
    this.board.setCell.call(this.board, cell, user);

    if(this.board.checkWinner.call(this.board)) {
      result = (this.AIMarker === this.board.winner) ? 10 : -10;
    }
    else if(this.board.checkDraw.call(this.board)) {
      result = 0;
    }
    else {
      for(var i = 0; i < 9; i++) {
        if(this.isBlank(i)) {
          scores.push(this.getScore(this.getOpponent(user), i));
        }
      }
      result = this.getExtremum(scores, this.getOpponent(user));
    }

    this.board.clearCell.call(this.board, cell);
    return result;
  }

  getOpponent(marker) {
    return this.AIMarker === marker ? this.userMarker : this.AIMarker;
  }

  getMaxIndex(scores) {
    var max = Math.max.apply(null, scores);
    return scores.indexOf(max);
  }

  getBestMove(user) {
    var scores = [null, null, null, null, null, null, null, null, null];

    for(var i = 0; i < 9; i++) {
      if(this.isBlank(i)) {
        scores[i] = this.getScore(user, i);
      }
    }

    return this.getMaxIndex(scores);
  }

  isBlank(index) {
    return this.board.isBlank.call(this.board, index);
  }
}
