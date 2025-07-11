import type { FunctionComponent } from 'react';

import type { GameStatus } from '@type/game.types';

type ResetButtonProps = {
  onClick: () => void;
  status: GameStatus;
};

export const Reset: FunctionComponent<ResetButtonProps> = ({
  onClick,
  status,
}) => {
  if (status === 'Ongoing') {
    return null;
  }

  return (
    <div className="grid place-content-center px-10 pt-5">
      <button
        className="rounded-lg shadow-lg bg-sky-900 py-2 px-20 mt-3 text-white hover:bg-sky-800 hover:cursor-pointer"
        onClick={onClick}
      >
        Replay
      </button>
    </div>
  );
};
