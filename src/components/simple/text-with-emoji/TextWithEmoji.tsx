import type { FunctionComponent, PropsWithChildren } from 'react';

export const TextWithEmoji: FunctionComponent<PropsWithChildren> = ({
  children,
}) => <span className="text-transparent text-shadow-sky">{children}</span>;
