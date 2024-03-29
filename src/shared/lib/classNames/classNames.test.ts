import { classNames } from './classNames';

describe('classNames', () => {
  test('with only 1 param', () => {
    expect(classNames('some')).toBe('some');
  });

  test('with additional param', () => {
    const expected = 'some class1 class2';
    expect(classNames('some', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'some class1 class2 hovered scrollable';
    expect(
      classNames('some', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'some class1 class2 hovered';
    expect(
      classNames('some', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'some class1 class2 hovered';
    expect(
      classNames('some', { hovered: true, scrollable: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
