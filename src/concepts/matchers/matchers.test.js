test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const data = { fname: 'Yoga' };
    data['lname'] = 'L';
    expect(data).toEqual({ fname: 'Yoga', lname: 'L' });
});