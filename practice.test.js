const Practice = require('./practice')

test('Capitalize', () => {
    expect(Practice.capitalize('hakim')).toBe('Hakim');
});

test('Reverse String (1)', () => {
    expect(Practice.reverseString('Hakim')).toBe('mikaH');
});

test('Calculator: add', () => {
    expect(Practice.calculator.add(24, 6)).toBe(24 + 6);
});

test('Calculator: subtract', () => {
    expect(Practice.calculator.subtract(100, 50)).toBe(100 - 50);
});

test('Calculator: divide', () => {
    expect(Practice.calculator.divide(100, 33)).toBe(100 / 33);
});

test('Calculator: multiply', () => {
    expect(Practice.calculator.multiply(6, 9)).toBe(6 * 9);
});