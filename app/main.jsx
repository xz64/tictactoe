/*global $*/
/*global document*/
import BoardController from './controller/BoardController.jsx';

$(document).ready(() => {
  new BoardController(document.getElementById('content'));
});
