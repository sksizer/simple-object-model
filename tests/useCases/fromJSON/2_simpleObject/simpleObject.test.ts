import { describe, expect, it, test } from 'vitest';
import data from './data.json';
import { getContext } from '@/index';

it('will have no side effects', () => {
  let orm = getContext();
  expect(() => {
    orm.loadFromObject(data);
  }).not.toThrowError();
  expect(orm.getTypes().length).toEqual(0);
});

// describe('Strict mode operation', () => {
//   let orm = getContext();
//   orm.setMode('strict');
//   expect(() => {
//     orm.loadFromObject(data);
//   }).toThrowError();
// })
