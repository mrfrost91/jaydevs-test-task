import { calculateMinDistance, getDp, run } from "./functions";
import { calcMinDistanceTestCases, getDpTestCases, runTestErrorCases } from "./fixtures";

describe('getDp function test cases', () => {
  test.each(getDpTestCases)('%s', (_, i, j, dp, expectedToBe) => {
    expect(getDp(i, j, dp)).toBe(expectedToBe);
  })
});

describe('calculateMinDistance function test cases', () => {
  test.each(calcMinDistanceTestCases)('%s', (_, firstWord, secondWord, expectedToBe) => {
    expect(calculateMinDistance(firstWord, secondWord)).toBe(expectedToBe);
  })
});

describe('run function test cases', () => {
  let errorSpy;

  beforeAll(() => {
    errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  afterEach(() => {
    errorSpy.mockClear();
  });

  test.each(runTestErrorCases)('%s', (
    _,
    firstWord,
    secondWord,
    expectedToBe,
    expectedToHaveBeenCalledTimes,
    expectedToHaveBeenCalledWith,
  ) => {
    expect(run(firstWord, secondWord)).toBe(expectedToBe);
    expect(errorSpy).toHaveBeenCalledTimes(expectedToHaveBeenCalledTimes);
    expect(errorSpy).toHaveBeenCalledWith(expectedToHaveBeenCalledWith);
  });

  test('case when firstWord and secondWord strings are correct', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    logSpy.mockImplementation(() => {});
    const firstWord = 'wordone';
    const secondWord = 'wordtwo';

    expect(run(firstWord, secondWord)).toBe(0);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(3);

    logSpy.mockRestore();
  });
});
