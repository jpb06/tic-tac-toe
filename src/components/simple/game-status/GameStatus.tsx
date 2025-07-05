import type { FunctionComponent } from 'react';

import type { Player, GameStatus as Status } from '@type/game.types';

import { GameOver, Ongoing, OPlayerWin, XPlayerWin } from './children';

type GameStatusProps = {
  status: Status;
  nextPlayer: Player;
};

export const GameStatus: FunctionComponent<GameStatusProps> = ({
  status,
  nextPlayer,
}) => (
  <div className="pb-5 px-10 text-center">
    <div className="text-2xl h-24">
      {
        {
          Ongoing: <Ongoing nextPlayer={nextPlayer} />,
          GameOver: <GameOver />,
          '⭕': <OPlayerWin />,
          '❌': <XPlayerWin />,
        }[status]
      }
    </div>
  </div>
);
