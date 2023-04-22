describe('Common matchers', () => {
    test('value compare matcher', () => {
        expect(2 + 3).toBe(5);
    });

    test('object compare matcher', () => {
        const data = { fname: 'Yoga' };
        data['lname'] = 'L';
        expect(data).toEqual({ fname: 'Yoga', lname: 'L' });
    });
});


// Customer matcher
describe('Customer matcher', () => {
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

    test('case insensitive object comparison', () => {
        const obj1 = { name: 'YogA', age: 30 };
        const obj2 = { NAME: 'yoga', AGE: 30 };
        expect(obj1).toEqualCaseInsensitive(obj2);
    });
});


describe('Truthiness matcher', () => {

    test('null check', () => {
        const name = null;
        expect(name).toBeNull();
        expect(name).toBe(null);
    });

    test('const undefined check', () => {
        const name = undefined;
        expect(name).toBeUndefined();
        expect(name).not.toBeDefined();
    });

    test('let undefined check', () => {
        let name;
        expect(name).toBeUndefined();
        expect(name).not.toBeDefined();
    });

    test('const defined check', () => {
        const name = 'Yoga';
        expect(name).toBeDefined();
        expect(name).not.toBeUndefined();
    });

    test('let defined check', () => {
        let name = '';
        expect(name).toBeDefined();
        expect(name).not.toBeUndefined();
    });

    test('truthy check', () => {
        const name = 'Yoga';
        expect(name).toBeTruthy();
        expect(name).not.toBeFalsy();
    });
});

describe('String or Regular Expression matcher', () => {
    test('truthy check with regex', () => {
        const name = 'Yogananda Rao Locherla';
        expect(name).toMatch(/[Yy]/);               // Contains capital Y or small y
        expect(name).toMatch(/[Yy][a-zA-Z]/);       // Starts capital Y or small y
        expect(name).not.toMatch(/[y][a-zA-Z]/);    // Starts capital Y
        expect(name).toMatch(/[Y][a-zA-Z]/);        // Starts capital Y
        expect(name).toMatch(/anand/);              // Contains anand
    });
});


describe('Numbers matcher', () => {
    test('comparision match', () => {
        const age = 30;
        expect(age).toBe(30);
        expect(age).toEqual(30);
        expect(age).toBeGreaterThan(29);
        expect(age).toBeGreaterThanOrEqual(30);
        expect(age).toBeGreaterThanOrEqual(28);
        expect(age).toBeLessThan(39);
        expect(age).toBeLessThanOrEqual(30);
        expect(age).toBeLessThanOrEqual(69);
    });

    test('float value comparision match', () => {
        const sum = 20.12345 + 12.3245;
        expect(sum).toBe(32.44795);
        expect(sum).toEqual(32.44795);
        expect(sum).toBeCloseTo(32.44799);
        expect(sum).toBeCloseTo(32.4479);
        expect(sum).toBeCloseTo(32.44796);
        expect(sum).toBeCloseTo(32.44794);
        expect(sum).toBeCloseTo(32.448);
        expect(sum).toBeCloseTo(32.45);
        expect(sum).not.toBeCloseTo(32.46);
        expect(sum).not.toBeCloseTo(32.5);
    });
});

describe('Arrays and Iterables matchers', () => {
    const testLibraries = [
        'Jest',
        'Mocha',
        'Jasmine',
        'Karma',
        'Ava',
        'Tape',
        'QUnit',
        'Protractor',
        'TestCafé',
        'Cypress'
    ]

    test('test libraries list has "jest" on it', () => {
        expect(testLibraries).toContain('Jest');
        expect(new Set(testLibraries)).toContain('Jest');
    });
});

describe('Exception matchers', () => {
    function compileReactCode() {
        throw new Error('you are using the incompatible Node version!');
    }

    test('compiling react application goes as expected', () => {
        expect(() => compileReactCode()).toThrow();
        expect(() => compileReactCode()).toThrow(Error);
        expect(() => compileReactCode()).toThrow('you are using the incompatible Node version!');
        expect(() => compileReactCode()).toThrow(/Node/); // Regex
    });
});