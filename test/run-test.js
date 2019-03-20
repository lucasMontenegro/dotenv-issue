const { assert } = require('chai');
const top = process.env.MESSAGE;
module.exports = actual => {
  const fnblock = process.env.MESSAGE;
  describe('Alien Message', function () {
    it('Top should match', function () {
      assert.equal(actual, top, 'top');
    });
    it('Function block should match', function () {
      assert.equal(actual, fnblock, 'function block');
    });
    it('Mocha should match', function () {
      assert.equal(actual, process.env.MESSAGE, 'mocha');
    });
  });
}
