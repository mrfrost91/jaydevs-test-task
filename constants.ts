export const MAX_WORD_LENGTH = 1_000_000;

export const ERROR_MESSAGE = {
  noArgumentsProvided: 'Usage: npm start -- word1 word2',
  firstArgumentIsTooLong: `The first word you've provided is too long. Maximum word length is ${MAX_WORD_LENGTH} symbols`,
  secondArgumentIsTooLong: `The second word you've provided is too long. Maximum word length is ${MAX_WORD_LENGTH} symbols`,
};
