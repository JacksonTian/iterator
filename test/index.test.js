var itx = require('../index');
var expect = require('expect.js');

describe('values', function () {
  it("should ok", function () {
    var map = new Map();
    expect(itx.values(map.keys())).to.eql([]);
  });

  it("should ok with elements", function () {
    var map = new Map();
    map.set(1, 2);
    expect(itx.values(map.keys())).to.eql([1]);
  });
});
