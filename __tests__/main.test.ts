import {hello} from '../src/main'

describe('main testing', () => {
  it('works', () => {
    expect(hello()).toBe('hi');
  });
});
