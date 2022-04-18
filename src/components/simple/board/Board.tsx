import { Square } from '@components/simple';
import { Moves } from '@type/game.types';

type BoardProps = {
  onClick: (index: number) => void;
  moves: Moves;
};

export const Board = ({ onClick, moves }: BoardProps) => (
  <div className="grid grid-cols-3 gap-1 place-content-center px-10">
    {moves.map((value, index) => (
      <Square key={index} onClick={() => onClick(index)} value={value} />
    ))}
  </div>
);
