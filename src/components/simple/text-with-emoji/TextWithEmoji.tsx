import { PropsWithChildren } from "react";

export const TextWithEmoji = ({ children }: PropsWithChildren<unknown>) => (
  <span className="text-transparent text-shadow-sky">{children}</span>
);
