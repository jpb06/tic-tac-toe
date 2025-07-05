import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { appRender } from '@tests/renders/appRender';

import { TextWithEmoji } from './TextWithEmoji';

describe('TextWithEmoji component', () => {
  it('should display its children', () => {
    const text = 'Cool';

    appRender(<TextWithEmoji>{text}</TextWithEmoji>);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveClass(
      'text-transparent',
      'text-shadow-sky',
    );
  });
});
