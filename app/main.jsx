import React from 'react';
import ReactDOM from 'react-dom';

import TicTacToeBoard from './view/TicTacToeBoard.jsx';

function start() {
  ReactDOM.render(
    <TicTacToeBoard/>,
    document.getElementById('content')
  );
}

$(document).ready(start);
