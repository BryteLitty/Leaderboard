const refreshBtn = document.querySelector('.refresh-btn');
const gameID = 'YVE8pqwqOObzJ3cBeyNu';

const saveData = async (userVal, scoreVal) => {
  const scoreEndpoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;

  await fetch(scoreEndpoint, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ user: userVal, score: scoreVal }),
  });
};

const addScore = () => {
  const form = document.querySelector('form');
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  const submitBtn = document.querySelector('.submit-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    saveData(nameInput.value, scoreInput.value);

    form.reset();
  });
};

const getScores = async () => {
  const scoreEndpoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;

  const scores = await fetch(scoreEndpoint);
  const data = await scores.json();
  const fetched = await data.result;

  const scoreBoard = document.querySelector('.score-board');
  scoreBoard.innerHTML = '';
  fetched.forEach((score) => {
    const content = `
        <li class="score-item">${score.user}: ${score.score}</>
        `;
    scoreBoard.innerHTML += content;
  });
};

// listen for click event on refresh button
const refreshScores = () => {
  refreshBtn.addEventListener('click', () => {
    getScores();
  });
};

export { addScore, getScores, refreshScores };