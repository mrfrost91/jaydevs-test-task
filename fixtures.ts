import { ERROR_MESSAGE, MAX_WORD_LENGTH } from "./constants";

type CalcMinDistanceTestCases = [testName: string, firstWord: string, secondWord: string, expectedToBe: number][];
type GetDpTestCases = [testName: string, i: number, j: number, dp: number[][], expectedToBe: number][];
type RunTestErrorCases = [
  testName: string,
  firstWord: string,
  secondWord: string,
  expectedToBe: number,
  expectedToHaveBeenCalledTimes: number,
  expectedToHaveBeenCalledWith: string,
][];

export const calcMinDistanceTestCases: CalcMinDistanceTestCases = [
  ['case when firstWord is empty', '', 'secondWord', -1],
  ['case when secondWord is empty', 'firstWord', '', -1],
  ['case when firstWord and secondWord are empty', '', '', -1],
  ['case with 1 replace operation', 'kitten', 'bitten', 1],
  ['case with 3 replace operations', 'wordone', 'wordtwo', 3],
  ['case with 1 insert operation', 'kitten', 'kittens', 1],
  ['case with 6 insert operations', 'frost', 'frostbitten', 6],
  ['case with 1 delete operation', 'kittens', 'kitten', 1],
  ['case with 6 delete operations', 'frostbitten', 'frost', 6],
  ['case with 2 replace and 1 insert operation', 'kitten', 'sitting', 3],
  ['case with 5 delete and 1 replace operation', 'frostbitten', 'kitten', 6],
];

export const getDpTestCases: GetDpTestCases = [
  ['case when i and j are less than 0', -1, -1, [], 0],
  ['case when i is less than 0', -1, 1, [], 2],
  ['case when j is less than 0', 1, -1, [], 2],
  ['case when i and j are equal or greater than 0', 0, 0, [[3]], 3],
];

export const runTestErrorCases: RunTestErrorCases = [
  ['case when firstWord was not provided', '', 'wordtwo', 1, 1, ERROR_MESSAGE.noArgumentsProvided],
  ['case when secondWord was not provided', 'wordone', '', 1, 1, ERROR_MESSAGE.noArgumentsProvided],
  ['case when both firstWord and secondWord were not provided', '', '', 1, 1, ERROR_MESSAGE.noArgumentsProvided],
  ['case when firstWord exceeds symbol limit', 'a'.repeat(MAX_WORD_LENGTH + 1), 'wordtwo', 2, 1, ERROR_MESSAGE.firstArgumentIsTooLong],
  ['case when secondWord exceeds symbol limit', 'wordone', 'a'.repeat(MAX_WORD_LENGTH + 1), 3, 1, ERROR_MESSAGE.secondArgumentIsTooLong],
];
