export const getGoogleLink = (productName: string): string =>
  `https://www.google.com/search?q=${productName.split(' ').join('+')}&tbm=shop`;
