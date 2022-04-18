import { screen } from '@testing-library/react';

import { appRender } from '@tests/renders/appRender';
import { GameStatus } from '@type/game.types';

import { Reset } from './Reset';

describe('Reset component', () => {
  const handleClick = jest.fn();

  it('should not display the reset button when game is ongoing', () => {
    appRender(<Reset status="Ongoing" onClick={handleClick} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  const message = 'should display the reset button when status is';
  it.each([['GameOver'], ['❌'], ['⭕']])(`${message} %s`, (status) => {
    appRender(<Reset status={status as GameStatus} onClick={handleClick} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
