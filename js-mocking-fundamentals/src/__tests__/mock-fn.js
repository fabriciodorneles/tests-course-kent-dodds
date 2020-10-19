const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner',() => {
  const originalgetWinner = utils.getWinner;
  utils.getWinner = (p1,p2) => p1;

  const winner = thumbWar('Kent C. Dodds','Ken Wheeler');
  expect(winner).toBe('Kent C. Dodds');

  
});
