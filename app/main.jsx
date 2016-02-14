/*global $*/
/*global document*/
import GameController from './controller/GameController.jsx';

require('../styles/style.css');

$(document).ready(() => {
  $('body').append('<div id="content"/>');
  new GameController(document.getElementById('content'));
});
