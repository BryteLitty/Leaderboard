const data = [
  {
    name: 'Bryte Litty',
    score: 98,
  },
  {
    name: 'Blessing Addison',
    score: 95,
  },
  {
    name: 'Joyce Bruce',
    score: 90,
  },
  {
    name: 'Juline Creapx',
    score: 80,
  },
];

const displayScore = () => {
  const scoreBoard = document.querySelector('.score-board');
  scoreBoard.innerHTML = '';
  data.forEach((score) => {
    const content = `
        <li class="score-item">${score.name}: ${score.score}</>
        `;
    scoreBoard.innerHTML += content;
  });
};

const addScore = () => {
  const form = document.querySelector('form');
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  const submitBtn = document.querySelector('.submit-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newInput = {
      name: nameInput.value,
      score: scoreInput.value,
    };

    data.push(newInput);
    form.reset();
    displayScore();
  });
};

export { displayScore, addScore };