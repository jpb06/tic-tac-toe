import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import type { ReactElement } from 'react';

export interface AppRenderResult extends RenderResult {
  user: UserEvent;
}

export const appRender = (ui: ReactElement): AppRenderResult => {
  const withUser = {
    user: userEvent.setup(),
    ...render(ui),
  };

  return withUser;
};
