import type { FunctionComponent } from 'react';

import { Game } from '../../complex/game/Game';
import { Title } from '../../simple';

export const Home: FunctionComponent = () => (
  <div className="container mx-auto max-w-sm">
    <Title />
    <Game />
  </div>
);
