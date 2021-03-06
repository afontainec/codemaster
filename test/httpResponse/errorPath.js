// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const path = require('path');
const { httpResponse } = require('../..');

const { assert } = chai;


// Our parent block
describe('Http Response: Error Path', () => { // eslint-disable-line


  it('Happy path',  (done) => { // eslint-disable-line
    const { sep } = path;
    const result = httpResponse.errorPath();
    const end = `client${sep}views${sep}error.ejs`;
    assert.isTrue(result.endsWith(end), `${result} should end with ${end}`);
    done();
  });
});
