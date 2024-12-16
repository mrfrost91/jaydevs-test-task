import { ERROR_MESSAGE, MAX_WORD_LENGTH } from "./constants";

export const getDp = (i: number, j: number, dp: number[][]): number => {
  if (i < 0 && j < 0) {
    return 0;
  }

  if (i < 0) {
    return j + 1;
  }

  if (j < 0) {
    return i + 1;
  }

  return dp[i][j];
};

export const calculateMinDistance = (firstWord: string, secondWord: string): number => {
  if (!firstWord || !secondWord) {
    return -1;
  }

  const n = firstWord.length;
  const m = secondWord.length;
  const dp = [];

  for (let i = 0; i < n; i++) {
    dp.push([]);

    for (let j = 0; j < m; j++) {
      const del = getDp(i, j - 1, dp) + 1;
      const insert = getDp(i - 1, j, dp) + 1;
      const replace = getDp(i - 1, j - 1, dp) + (firstWord[i] === secondWord[j] ? 0 : 1);

      dp[i].push(Math.min(insert, del, replace));
    }
  }

  return getDp(n - 1, m - 1, dp);
};

export const run = (firstWord: string, secondWord: string): number => {
  if (!firstWord || !secondWord) {
    console.error(ERROR_MESSAGE.noArgumentsProvided);

    return 1;
  }

  if (firstWord.length > MAX_WORD_LENGTH) {
    console.error(ERROR_MESSAGE.firstArgumentIsTooLong);

    return 2;
  }

  if (secondWord.length > MAX_WORD_LENGTH) {
    console.error(ERROR_MESSAGE.secondArgumentIsTooLong);

    return 3;
  }

  const minDistance = calculateMinDistance(firstWord, secondWord);
  console.log(minDistance);

  return 0;
}
