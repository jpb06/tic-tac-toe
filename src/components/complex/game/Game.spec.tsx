import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { textContentMatcher } from '@tests/matchers/text-content.matcher';
import { appRender } from '@tests/renders/appRender';

import { Game } from './Game';

describe('Game component', () => {
  it('should not display the replay button on start', () => {
    appRender(<Game />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(9);
  });

  it('should display a message and a replay button when game is over', async () => {
    const { user } = appRender(<Game />);

    const buttons = screen.getAllByRole('button');

    const gameWithNoWinner = [0, 3, 1, 2, 4, 8, 5, 7, 6];
    await Promise.all(
      gameWithNoWinner.map(async (index) => {
        await user.click(buttons[index]);
      }),
    );

    expect(screen.getByText('☠️ Game over! ☠️')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /replay/i })).toBeInTheDocument();
  });

  it('should display a message and a replay button when the first player won', async () => {
    const { user } = appRender(<Game />);

    const buttons = screen.getAllByRole('button');

    const gameWithXWinner = [4, 5, 2, 7, 1, 8, 0];
    await Promise.all(
      gameWithXWinner.map(async (index) => {
        await user.click(buttons[index]);
      }),
    );

    expect(
      screen.getByText(
        textContentMatcher(
          'So ❌ tried to win and he just did the absolute madman! 🎉',
        ),
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /replay/i })).toBeInTheDocument();
  });

  it('should display a message and a replay button when the second player won', async () => {
    const { user } = appRender(<Game />);

    const buttons = screen.getAllByRole('button');

    const gameWithXWinner = [0, 4, 1, 2, 3, 6];
    await Promise.all(
      gameWithXWinner.map(async (index) => {
        await user.click(buttons[index]);
      }),
    );

    expect(
      screen.getByText(textContentMatcher('⭕ has won! Whooooo! 🔥')),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /replay/i })).toBeInTheDocument();
  });

  it('should do nothing when clicking on the board if game is over', async () => {
    const { user } = appRender(<Game />);

    const buttons = screen.getAllByRole('button');

    const gameWithNoWinner = [0, 3, 1, 2, 4, 8, 5, 7, 6];
    await Promise.all(
      gameWithNoWinner.map(async (index) => {
        await user.click(buttons[index]);
      }),
    );

    await user.click(buttons[0]);

    expect(buttons[0]).toHaveTextContent('❌');
  });

  it('should do nothing when clicking on an already chosen board tile', async () => {
    const { user } = appRender(<Game />);

    const buttons = screen.getAllByRole('button');

    await user.click(buttons[0]);

    expect(buttons[0]).toHaveTextContent('❌');

    await user.click(buttons[0]);

    expect(buttons[0]).toHaveTextContent('❌');
  });

  it('should reset the board', async () => {
    const { user } = appRender(<Game />);

    const buttons = screen.getAllByRole('button');

    const gameWithNoWinner = [0, 3, 1, 2, 4, 8, 5, 7, 6];
    await Promise.all(
      gameWithNoWinner.map(async (index) => {
        await user.click(buttons[index]);
      }),
    );

    expect(screen.getByText('☠️ Game over! ☠️')).toBeInTheDocument();
    const resetButton = screen.getByRole('button', { name: /replay/i });

    expect(screen.getAllByRole('button', { name: '❌' })).toHaveLength(5);
    expect(screen.getAllByRole('button', { name: '⭕' })).toHaveLength(4);

    await user.click(resetButton);

    expect(
      screen.queryByRole('button', { name: '❌' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: '⭕' }),
    ).not.toBeInTheDocument();

    expect(resetButton).not.toBeInTheDocument();

    expect(
      screen.getByText(textContentMatcher('😼 Your turn ❌')),
    ).toBeInTheDocument();
  });
});
