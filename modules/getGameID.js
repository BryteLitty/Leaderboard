export default async function () {
  const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

  const newGame = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name: 'My kinda game' }),
  });

  const getJSON = await newGame.json();
  const result = getJSON.result.match(/[a-zA-Z0-9]{20}/).join('');

  return result;
}
