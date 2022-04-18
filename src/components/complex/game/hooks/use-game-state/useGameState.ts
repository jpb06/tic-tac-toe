import { useState } from 'react';

import { Moves, Player, GameStatus as Status } from '@type/game.types';

import { getGameStatus } from './logic/get-game-status';

export const useGameState = () => {
  const [moves, setMoves] = useState<Moves>(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState<Player>('❌');
  const [status, setStatus] = useState<Status>('Ongoing');

  const handleMove = (index: number) => {
    if (status !== 'Ongoing') {
      return;
    }

    if (moves[index] !== null) {
      return;
    }

    moves[index] = nextPlayer;

    setNextPlayer(nextPlayer === '⭕' ? '❌' : '⭕');
    setMoves(moves);
    setStatus(getGameStatus(moves));
  };

  const handleReset = () => {
    setMoves(Array(9).fill(null));
    setNextPlayer('❌');
    setStatus('Ongoing');
  };

  return {
    handleMove,
    handleReset,
    status,
    nextPlayer,
    moves,
  };
};
