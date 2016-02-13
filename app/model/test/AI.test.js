import test from 'tape';
import Board from '../Board';
import AI from '../AI';

function testNextStep(board, expectedResult) {
  return function(t) {
    var ai = new AI(board, 'o', 'x');
    var nextCell = ai.getNextCell();
    t.equal(nextCell, expectedResult);
    t.end();
  };
}

test('AI selects winning spot at the end', testNextStep(new Board([
  'x', 'o', 'x',
  'o', 'x', 'o',
  'o', 'x', null
]), 8)
);

test('AI will pick the only empty cell remaining', testNextStep(new Board([
  'x', 'o', 'x',
  'o', null, 'o',
  'o', 'x', 'o'
]), 4)
);

test('AI selects winning spot on half-full board', testNextStep(new Board([
  'x', null, 'x',
  null, null, 'o',
  'o', null, 'o'
]), 1)
);

test('AI prevents opponent from winning', testNextStep(new Board([
  'x', 'o', 'x',
  null, null, null,
  'o', null, 'o'
]), 7)
);

test('AI strategizes based on minimax algorithm', testNextStep(new Board([
  'x', null, 'o',
  'o', null, 'o',
  'o', 'x', 'x'
]), 4)
);
