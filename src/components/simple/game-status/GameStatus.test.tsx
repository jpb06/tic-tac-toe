import { screen } from '@testing-library/react';

import { textContentMatcher } from '@tests/matchers/text-content.matcher';
import { appRender } from '@tests/renders/appRender';

import { GameStatus } from './GameStatus';

describe('GameStatus component', () => {
  it('should display the next player', () => {
    appRender(<GameStatus nextPlayer="❌" status="Ongoing" />);

    expect(
      screen.getByText(textContentMatcher('😼 Your turn ❌'))
    ).toBeInTheDocument();
  });

  it('should display game over', () => {
    appRender(<GameStatus nextPlayer="❌" status="GameOver" />);

    expect(screen.getByText('☠️ Game over! ☠️')).toBeInTheDocument();
  });

  it('should display ⭕ player win message', () => {
    appRender(<GameStatus nextPlayer="❌" status="⭕" />);

    expect(
      screen.getByText(textContentMatcher('⭕ has won! Whooooo! 🔥'))
    ).toBeInTheDocument();
  });

  it('should display ❌ player win message', () => {
    appRender(<GameStatus nextPlayer="⭕" status="❌" />);

    expect(
      screen.getByText(
        textContentMatcher(
          'So ❌ tried to win and he just did the absolute madman! 🎉'
        )
      )
    ).toBeInTheDocument();
  });
});
