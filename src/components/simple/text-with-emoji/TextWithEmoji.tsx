import type { PropsWithChildren } from 'react';

export const TextWithEmoji = ({ children }: PropsWithChildren) => (
  <span className="text-transparent text-shadow-sky">{children}</span>
);
