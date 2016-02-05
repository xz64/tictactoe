import React from 'react';
import ReactDOM from 'react-dom';

function start() {
  ReactDOM.render(
    <div>Hello world!</div>,
    document.getElementById('content')
  );
}

$(document).ready(start);
