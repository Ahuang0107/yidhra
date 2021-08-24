import {flatten, typeOf, unique} from "./index";

test('typeOf', () => {
  expect(typeOf([1, 2])).toBe('Array');
});

test('unique', () => {
  expect(unique([6, 3, 6, 8, 2, 1, 9, 4, 3, 6])).toEqual([6, 3, 8, 2, 1, 9, 4]);
});

test('flatten', () => {
  expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
});
