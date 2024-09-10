import {getSize} from './getSize';

describe('getSize ', () => {
  it('should return the corresponding size when a valid size key is provided', () => {
    expect(getSize('xxs')).toBe('24px');
    expect(getSize('l')).toBe('80px');
  });

  it('should return the input size when an invalid size key is provided', () => {
    expect(getSize('invalidSize')).toBe('invalidSize');
    expect(getSize()).toBe('24px');
  });
});
