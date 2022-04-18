import { screen } from '@testing-library/react';

import { appRender } from '@tests/renders/appRender';

import { Home } from './Home';

describe('Home component', () => {
  it('should display a title', () => {
    appRender(<Home />);

    expect(screen.getByRole('heading')).toHaveTextContent('Tic Tac Toe!');
  });

  it.only('should display the game board', () => {
    appRender(<Home />);

    expect(screen.getAllByRole('button')).toHaveLength(9);
  });
});
