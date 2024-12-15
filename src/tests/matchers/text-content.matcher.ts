import type { MatcherFunction } from '@testing-library/react';

export const textContentMatcher = (
  textMatch: string | RegExp,
): MatcherFunction => {
  const hasText =
    typeof textMatch === 'string'
      ? (node: Element | null) => node && node.textContent === textMatch
      : (node: Element | null) =>
          node && textMatch.test(node.textContent ?? '');

  return (_content: string, node: Element | null) => {
    if (!hasText(node)) {
      return false;
    }

    const childrenDontHaveText = Array.from(node?.children || []).every(
      (child) => !hasText(child),
    );

    return childrenDontHaveText;
  };
};
