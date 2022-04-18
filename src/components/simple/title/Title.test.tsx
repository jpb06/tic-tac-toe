import { screen } from '@testing-library/react';

import { appRender } from '@tests/renders/appRender';

import { Title } from './Title';

describe('Title component', () => {
  it('should display the app title', () => {
    appRender(<Title />);

    expect(screen.getByRole('heading')).toHaveTextContent('Tic Tac Toe!');
  });
});
