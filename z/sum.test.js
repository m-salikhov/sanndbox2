import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('два плюс два равно четыре', () => {
	expect(2 + 2).toBe(4);
});
