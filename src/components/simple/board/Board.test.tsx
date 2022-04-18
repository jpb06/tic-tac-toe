import { screen } from '@testing-library/react';

import { appRender } from '@tests/renders/appRender';
import { Moves } from '@type/game.types';

import { Board } from './Board';

describe('Board component', () => {
  const handleClick = jest.fn();

  it('should display nine buttons', () => {
    const moves = Array(9).fill(null);

    appRender(<Board onClick={handleClick} moves={moves} />);

    expect(screen.getAllByRole('button')).toHaveLength(9);
  });

  it('should display four ❌ and five ⭕', () => {
    const moves = Array(5).fill('⭕').concat(Array(4).fill('❌'));

    appRender(<Board onClick={handleClick} moves={moves} />);

    expect(screen.getAllByText('❌')).toHaveLength(4);
    expect(screen.getAllByText('⭕')).toHaveLength(5);
  });

  it('should display items in correct order', () => {
    const moves: Moves = ['❌', '⭕', null, null, '⭕', '❌', '❌', null, '⭕'];

    appRender(<Board onClick={handleClick} moves={moves} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(9);
    moves.map((value, index) => {
      expect(buttons[index]).toHaveTextContent(value ?? '');
    });
  });

  it('should call onClick handler with the button index as parameter', async () => {
    const moves: Moves = ['❌', '⭕', null, null, '⭕', '❌', '❌', null, '⭕'];

    const { user } = appRender(<Board onClick={handleClick} moves={moves} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(9);
    await Promise.all(
      moves.map(async (value, index) => {
        await user.click(buttons[index]);

        expect(handleClick).toHaveBeenNthCalledWith(index + 1, index);
      })
    );
  });
});
