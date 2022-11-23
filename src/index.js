import _ from 'lodash';
import './style.css';

// import key functions
import { addScore, displayScore } from '../modules/functionalities.js';

const init = () => {
    displayScore();
    addScore();
}

init();