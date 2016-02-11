import test from 'tape';
import Board from '../Board';

test('board determines if it is full', function(t) {
  var board = new Board([
    'x', 'o', 'x',
    'o', 'x', 'o',
    'x', 'o', 'x'
  ]);

  t.equal(board.isFull.call(board), true);
  t.end();
});

test('board detects winner', function(t) {
  var board = new Board([
    'x', 'o', 'x',
    'o', 'x', 'o',
    'x', 'o', 'x'
  ]);

  t.equal(board.checkWinner.call(board), true);
  t.end();
});

test('board identifies diagonal winner', function(t) {
  var board = new Board([
    'x', 'o', 'x',
    'o', 'x', 'o',
    'x', 'o', 'x'
  ]);

  board.checkWinner.call(board);
  t.equal(board.winner, 'x');
  t.end();
});

test('board identifies row winner', function(t) {
  var board = new Board([
    'x', 'x', 'x',
    'x', 'o', 'o',
    'o', 'o', 'x'
  ]);

  board.checkWinner.call(board);
  t.equal(board.winner, 'x');
  t.end();
});

test('board identifies column winner', function(t) {
  var board = new Board([
    'o', 'o', 'x',
    'x', 'o', 'x',
    'o', 'x', 'x'
  ]);

  board.checkWinner.call(board);
  t.equal(board.winner, 'x');
  t.end();
});

test('board detects draw', function(t) {
  var board = new Board([
    'o', 'x', 'o',
    'x', 'o', 'x',
    'x', 'o', 'x'
  ]);

  board.checkDraw.call(board);
  t.equal(board.winner, board.NOBODY);
  t.end();
});
