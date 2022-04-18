import { Player } from "@type/game.types";

import { TextWithEmoji } from "../..";

type OngoingProps = {
  nextPlayer: Player;
};

export const Ongoing = ({ nextPlayer }: OngoingProps) => (
  <>
    😼 Your turn <TextWithEmoji>{`${nextPlayer}`}</TextWithEmoji>
  </>
);
