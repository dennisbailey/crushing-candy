var expect = require('chai').expect,
    core   = require('./core');

describe('Core', function() {
  describe('.store1' function() {
    describe('#salesDates()', function () {
      it('returns sales dates', function() {
        var expected = [ '2015-01-06',
                         '2015-01-07',
                         '2015-01-08',
                         '2015-01-09',
                         '2015-01-10'];                 
        assert.deepEqual(expected, core.store1.salesDates())
      });
    });  
  });
});