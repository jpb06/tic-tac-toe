'use client';

import type { FunctionComponent } from 'react';

import { Board, GameStatus, Reset } from '@components/simple';

import { useGameState } from './hooks/use-game-state/useGameState';

export const Game: FunctionComponent = () => {
  const { handleMove, handleReset, status, nextPlayer, moves } = useGameState();

  return (
    <>
      <GameStatus status={status} nextPlayer={nextPlayer} />
      <Board moves={moves} onClick={handleMove} />
      <Reset status={status} onClick={handleReset} />
    </>
  );
};
