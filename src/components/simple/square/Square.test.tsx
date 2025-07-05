import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { appRender } from '@tests/renders/appRender';

import { Square } from './Square';

describe('Square component', () => {
  const handleClick = vi.fn();

  it('should display a button', () => {
    appRender(<Square value="❌" onClick={handleClick} />);

    expect(screen.getByRole('button')).toHaveTextContent('❌');
  });

  it('should call the click handler', async () => {
    const { user } = appRender(<Square value="❌" onClick={handleClick} />);

    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
