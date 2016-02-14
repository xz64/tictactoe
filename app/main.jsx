/*global $*/
/*global document*/
/*global require*/
import GameController from './controller/GameController.jsx';

require('../styles/main.scss');

$(document).ready(() => {
  $('body').append('<div id="content"/>');
  new GameController(document.getElementById('content'));
});
