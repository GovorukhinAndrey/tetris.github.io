import 'babel-polyfill';
import _ from 'lodash';

import './../sass/main.sass';

// js
import Game from './game.js';

const game = new Game();

window.game = game;

console.log(game);
