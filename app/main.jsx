/*global $*/
/*global document*/
import GameController from './controller/GameController.jsx';

$(document).ready(() => {
  new GameController(document.getElementById('content'));
});
