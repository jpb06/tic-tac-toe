import type { GameStatus, Moves } from '@type/game.types';

export const getGameStatus = (move: Moves): GameStatus => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;

    if (move[a] && move[a] === move[b] && move[a] === move[c]) {
      return move[a];
    }
  }

  if (!move.some((el) => el === null)) {
    return 'GameOver';
  }

  return 'Ongoing';
};
