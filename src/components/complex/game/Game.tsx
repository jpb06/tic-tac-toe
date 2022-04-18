import { Board, GameStatus, Reset } from '@components/simple';

import { useGameState } from './hooks';

export const Game = () => {
  const { handleMove, handleReset, status, nextPlayer, moves } = useGameState();

  return (
    <>
      <GameStatus status={status} nextPlayer={nextPlayer} />
      <Board moves={moves} onClick={handleMove} />
      <Reset status={status} onClick={handleReset} />
    </>
  );
};
