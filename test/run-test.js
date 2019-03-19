const { assert } = require('chai');
const top = process.env.MESSAGE;
module.exports = actual => {
  const fnblock = process.env.MESSAGE;
  describe('Alien Message', function () {
    it('Should match', function () {
      assert.equal(actual, top, 'top');
      assert.equal(actual, fnblock, 'function block');
      assert.equal(actual, process.env.MESSAGE, 'mocha');
    });
  });
}
