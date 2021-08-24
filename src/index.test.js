import {typeOf} from "./index";

test('type of array', () => {
  expect(typeOf([1,2])).toBe('Array');
});
