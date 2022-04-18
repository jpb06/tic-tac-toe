import { Player, GameStatus as Status } from '@type/game.types';

import { GameOver, Ongoing, OPlayerWin, XPlayerWin } from './children';

type GameStatusProps = {
  status: Status;
  nextPlayer: Player;
};

export const GameStatus = ({ status, nextPlayer }: GameStatusProps) => (
  <div className="pb-5 px-10 text-center">
    <div className="text-2xl h-16">
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
