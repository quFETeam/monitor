import { superStorage } from '../src';

describe('localStorage', () => {
  it('write key:test,value:aaa', () => {
    superStorage.set('test', 'aaa');
  });
  it('should value aaa', () => {
    const val = superStorage.get('test');
    expect(val).toBe('aaa');
  });
  it('write key:test2,value:aaa,expired:5s', () => {
    superStorage.set('test2', 'bbb', 1000 * 5);
  });
  it('should value bbb', () => {
    const val = superStorage.get('test2');
    expect(val).toBe('bbb');
  });
  it('should value null', () => {
    setTimeout(() => {
      const val = superStorage.get('test2');
      expect(val).toBe(null);
    }, 1000 * 6);
  });
  it('key:test should value null', () => {
    superStorage.del('test');
    const val = superStorage.get('test');
    expect(val).toBe(null);
  });
});
