import 'babel-polyfill';
import _ from 'lodash';

import './../sass/main.sass';

// js
import Game from './game.js';
import View from './view.js';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37: // left arrow
      game.movePieceLeft();
      view.render(game.getState());
      break;
    case 38: // up arrow
      game.rotatePiece();
      view.render(game.getState());
      break;
    case 39: // right arrow
      game.movePieceRight();
      view.render(game.getState());
      break;
    case 40: // right arrow
      game.movePieceDown();
      view.render(game.getState());
      break;
  }
});

// view.renderStartScreen(game.getState());
// view.renderPauseScreen(game.getState());
// view.renderEndScreen(game.getState());
