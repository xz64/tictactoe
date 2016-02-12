import React from 'react';
import ReactDOM from 'react-dom';

import Board from './view/Board.jsx';

function start() {
  ReactDOM.render(
    <Board/>,
    document.getElementById('content')
  );
}

$(document).ready(start);
