export const getCapitalizedWord = (word: string): string =>
  `${word[0].toLocaleUpperCase()}${word.substring(1)}`;
