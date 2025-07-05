import type { FunctionComponent } from 'react';

import type { Player } from '@type/game.types';

import { TextWithEmoji } from '../..';

type OngoingProps = {
  nextPlayer: Player;
};

export const Ongoing: FunctionComponent<OngoingProps> = ({ nextPlayer }) => (
  <>
    😼 Your turn <TextWithEmoji>{`${nextPlayer}`}</TextWithEmoji>
  </>
);
