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

### Code Coverage Reporting

Code coverage is a metric to assess the software code is tested.
* Statement Coverage
* Branches Coverage
* Functions Coverage
* Lines Coverage

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

