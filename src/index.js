import './style.css';

import { addScore, getScores, refreshScores } from '../modules/functionalities';

const init = () => {
  getScores();
  addScore();
  refreshScores();
};

init();
