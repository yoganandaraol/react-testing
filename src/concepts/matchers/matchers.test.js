test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const data = { fname: 'Yoga' };
    data['lname'] = 'L';
    expect(data).toEqual({ fname: 'Yoga', lname: 'L' });
});

// Customer matcher

expect.extend({
    toEqualCaseInsensitive(received, expected) {
        const pass = JSON.stringify(received).toLowerCase() === JSON.stringify(expected).toLowerCase();
        if (pass) {
            return {
                message: () => `expected ${received} not to equal ${expected} (case insensitive)`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to equal ${expected} (case insensitive)`,
                pass: false,
            };
        }
    },
});

test('object comparision - Case sensitive', () => {
    const data = { fname: 'Yoga' };
    data['lname'] = 'L';
    expect(data).toEqualCaseInsensitive({ fname: 'yoga', lname: 'l' });
});