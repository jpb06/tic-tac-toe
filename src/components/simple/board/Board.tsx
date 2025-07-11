import type { FunctionComponent } from 'react';

import { Square } from '@components/simple';
import type { Moves } from '@type/game.types';

type BoardProps = {
  onClick: (index: number) => void;
  moves: Moves;
};

export const Board: FunctionComponent<BoardProps> = ({ onClick, moves }) => (
  <div className="grid grid-cols-3 gap-1 place-content-center px-10">
    {moves.map((value, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: /
      <Square key={index} onClick={() => onClick(index)} value={value} />
    ))}
  </div>
);
