import type React from 'react';
import type { FunctionComponent } from 'react';

import type { Player } from '@type/game.types';

type SquareProps = {
  onClick: (event: React.MouseEvent) => void;
  value: Player | null;
};

export const Square: FunctionComponent<SquareProps> = ({ onClick, value }) => (
  <button
    className="rounded-lg shadow-lg bg-sky-900 h-24 text-5xl text-transparent text-shadow-white
             hover:bg-sky-800 hover:ring-2 ring-inset hover:ring-white hover:cursor-pointer"
    onClick={onClick}
  >
    {value}
  </button>
);
