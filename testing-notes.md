React Testing


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

TDD - Test Driven Development

* TDD follows - Red Green Testing technique
* In TDD, 
    * first **Red** phase, test cases written to fail for the fucntionality provided on the bare-bones structure of component.
    * second **Green** phase, build the component to fulfill the test cases
    * third **Refactor** phase, alter the core components to optimise code without failing test cases.

---

