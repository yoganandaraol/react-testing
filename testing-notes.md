# React Testing


* `create-react-app` makes jest available to the projects globally 

* `test` and `expect` are methods which are available globally (no need to import any libraries)

> `test` method expects 3 parameters - `method name`, `function`, `timeout`

```javascript
test('my test', () => {
// test code here
}, 5000);
```

* **method-name**: [required] test case description
* **function**: [required] fucntion that executes the test scenario, code to be tested.
* **timeout**: [optional] parameter that allows you to set a timeout for the test. This is useful when you have tests that may take longer than the default timeout to complete.
* **skip**: An optional boolean that indicates whether to skip this test. If set to true, the test will not be run.
* **only**: An optional boolean that indicates whether to run only this test. If set to true, all other tests will be skipped.
* **beforeEach**: A function that will be called before each test is run. This can be used to set up any necessary test fixtures.
* **afterEach**: A function that will be called after each test is run. This can be used to tear down any test fixtures.
* **expect**: An optional argument that can be used to specify the number of assertions to expect in the test. If not specified, Jest will infer the number of assertions based on the number of expect calls within the test function.
* **test.todo**: A function that creates a placeholder test that is not yet implemented. This can be useful for planning out tests before writing the actual code.





Regenerate response

If the test takes longer than 5 seconds to complete, it will be marked as failed.

You can also set a global timeout for all tests in your Jest configuration file (jest.config.js) by adding the testTimeout option:

```javascript
module.exports = {
  // other Jest options here
  testTimeout: 5000, // 5 seconds
};
```

---

#### TDD - Test Driven Development

* TDD follows - Red Green Testing technique
* In TDD, 
    * first **Red** phase, test cases written to fail for the fucntionality provided on the bare-bones structure of component.
    * second **Green** phase, build the component to fulfill the test cases
    * third **Refactor** phase, alter the core components to optimise code without failing test cases.

---

# Jest

### Test Filetering

`test.only` is used to run a specific test case in isolation, ignoring the rest of the test cases. This is useful when you want to quickly run a single test case that you are working on without running the entire test suite. Here's an example:

```javscript
test.only('should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('should subtract two numbers', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('should multiply two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});
```
In this example, only the test case with the test.only method will be executed, and the other test cases will be skipped.

<br />

`test.skip` is used to skip a specific test case, ignoring it completely during the test run. This is useful when you have a test case that is currently failing or not implemented, but you don't want to remove it from the test suite. Here's an example:

```javscript
test('should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test.skip('should subtract two numbers', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('should multiply two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});
```
In this example, the test case with the test.skip method will be skipped during the test run, and the other test cases will be executed.

### Test Grouping

`describe` method used to group the test cases

describe accepts two arguments
1. first argument is the Group Name
2. second argument is a fucntion that contains the expectations to test

```javascript
describe('Math', () => {
  test('adds two numbers', () => {
    expect(1 + 2).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(2 * 3).toBe(6);
  });
});
```

`describe.skip` and `describe.only` also used as in `test` method

#### Nested Grouping

```javascript
describe('Math', () => {
  describe('Addition', () => {
    test('add two numbers', () => {
      expect(1 + 2).toBe(3);
    });
  
    test('adds a positive and negative number', () => {
      expect(2 + (-3)).toBe(-1);
    });
  });
  
  describe('Multiplication', () => {
    test('multiplies two positive numbers', () => {
      expect(2 * 3).toBe(6);
    });
  
    test('multiplies a positive and negative number', () => {
      expect(2 * (-3)).toBe(-6);
    });
  });
});
```

>Note: Grouping and Test Suites are similar.. but Test Suite refers to single file, where as Grouping refers to different categories of test cases in same file.

<br />

### File Name Conventions:

Files with below formats considered as test cases as per jest.
  * *.test.js or *.test.tsx 
  * *.spec.js or *.spec.tsx
  * *.js or *.tsx files in `__tests__` folders


instead of `test` method we can also use `it` method to define a test case.

`test.only` - is same as -> `fit`
`test.skip` - is same as -> `xit` 


In Jest, `test()` and `it()` functions are used to define a test case. Both functions are used to define the same thing, but `test()` is an alias for `it()`. So, both functions can be used interchangeably to define a test case.

For example, the following code defines a test case using both `test()` and `it()`:

```javascript
test('should return true', () => {
  expect(true).toBeTruthy();
});

it('should return false', () => {
  expect(false).toBeFalsy();
});
```
---
### Code Coverage Reporting

Code coverage is a metric to assess the software code is tested.
* Statement Coverage
* Branches Coverage
* Functions Coverage
* Lines Coverage
---

###How to update code coverage report?

  >Add following line in `package.json` under `scripts`
  >>```
  >>"coverage": "react-scripts test --coverage --watchAll"
  >>```
  >then run
  >>```
  >>npm run coverage
  >>```
  ><br />
  
  Example for Coverage Report

File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------|---------|----------|---------|---------|-------------------
All files                 |   31.25 |        0 |      60 |   31.25 |                   
 src                      |    8.33 |        0 |   33.33 |    8.33 |                   
  ->App.tsx                 |     100 |      100 |     100 |     100 |                   
  ->index.tsx               |       0 |      100 |     100 |       0 | 7-19              
  ->reportWebVitals.ts      |       0 |        0 |       0 |       0 | 3-10              
 src/components/greet     |     100 |      100 |     100 |     100 |                   
  ->greet.tsx               |     100 |      100 |     100 |     100 |                   
 src/components/greet-tdd |     100 |      100 |     100 |     100 |                   
  ->greet-tdd.tsx           |     100 |      100 |     100 |     100 |                   

<br />

> alternatively to get the coverage report only from components 
  >>```
  >>"coverage": "react-scripts test --coverage --watchAll" --collectCoverageFrom='src/components/**/*.{tx,tsx}'"
  >>```
  >then run
  >>```
  >>npm run coverage
  >>```
  ><br />
  
  Example for Coverage Report
  File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 |                   
 greet            |     100 |      100 |     100 |     100 |                   
  ->greet.tsx     |     100 |      100 |     100 |     100 |                   
 greet-tdd        |     100 |      100 |     100 |     100 |                   
  ->greet-tdd.tsx |     100 |      100 |     100 |     100 |                   

<br />

> to ignore specific files from coverage report
  >>```
  >>"coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{tx,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'"
  >>```
  > above configuration ignores all files in components folder which of ending with the pattern {types,stories,constants,test,spec}.{ts,tsx}

---

### Coverage Threshold

with the below configuration in `package.json` file we can set coverage threshold
```
"jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
  }
```
---

## Assertions

Assertions decide if a test passes or fails.

```javascript
expect(value) // The argument should be the value that code produces.
```

Normally, we use `expect` along with `matcher` function to assert.
A matcher can accept optional argument which is the correct expected value.

```javascript
expect(textElement).toBeInTheDocument();
```

In this example `expect(textElement)` comes with a matcher function called `toBeInTheDocument()` which optionally accepts a parameter.

### Matcher Functions

> reference from - https://jestjs.io/docs/using-matchers


#### &#8594; .toBe
```javascript
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

/*
    In this code, expect(2 + 2) returns an "expectation" object. 
    You typically won't do much with these expectation objects except call matchers on them. 
    In this code, .toBe(4) is the matcher. 
    When Jest runs, it tracks all the failing matchers,
    so that it can print out nice error messages for you.
*/
```
<br />

* `toBe` uses `Object.is` to test exact equality. 
* If you want to check the value of an object, use `toEqual`
* `toEqual` **recursively** checks every field of an object or array

#### &#8594; .toEqual
```javascript
test('object comparision - Case sensitive', () => {
  const data = { fname: 'Yoga' };
  data['lname'] = 'L';
  expect(data).toEqual({ fname: 'Yoga', lname: 'L'});
});
```

> **Note**: `toEqual` performs case sensitive comparison.
  In order to achieve case insensitive comparision, we need to extend the matcher function.

here is an example.

#### &#8594; extend .toEqual
```javascript
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
```
Once the custom matcher is defined, we can use it in our test cases with the expect() method

```javascript
test('object comparision - Case sensitive', () => {
  const data = { fname: 'Yoga' };
  data['lname'] = 'L';
  expect(data).toEqualCaseInsensitive({ fname: 'yoga', lname: 'l'});
});
```

```javascript
test('case insensitive object comparison', () => {
    const obj1 = { name: 'YogA', age: 30 };
    const obj2 = { NAME: 'yoga', AGE: 30 };
    expect(obj1).toEqualCaseInsensitive(obj2);
});
```

#### &#8594; Truthiness

    `.toBeNull`       matches only `null`
    `.toBeUndefined`  matches only `undefined`
    `.toBeDefined`    is the opposite of `toBeUndefined`
    `.toBeTruthy`     matches anything that an if statement treats as `true`
    `.toBeFalsy`      matches anything that an if statement treats as `false`
    `.toMatch`        matches anything fits to the regular expression treats as `true` else `false`

```javascript
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

describe('Regular Expression matcher', () => {
    test('truthy check with regex', () => {
        const name = 'Yoga';
        expect(name).toMatch(/[Yy]/); // Contains capital Y or small y
        expect(name).toMatch(/[Yy][a-zA-Z]/); // Starts capital Y or small y
        expect(name).not.toMatch(/[y][a-zA-Z]/); // Starts capital Y
        expect(name).toMatch(/[Y][a-zA-Z]/); // Starts capital Y
    });
});
```

#### &#8594; Numbers

    `.toBeGreaterThan`          calculated value greater than expected value
    `.toBeGreaterThanOrEqual`   calculated value greater than or equal to expected value
    `.toBeLessThan`             calculated value less than expected value
    `.toBeLessThanOrEqual`      calculated value less than or equal to expected value
    `.toBe`                     matches anything that exactly equals to treats as `true` else `false`
    `.toEqual`                  matches anything that exactly equals to treats as `true` else `false`
    `.toBeCloseTo`              floating point equality check with ignored tiny rounding errors

> **Note**: For numbers `.toBe` and `.toEqual` behaves exactly same.

```javascript
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
```