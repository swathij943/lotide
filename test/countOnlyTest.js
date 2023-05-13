const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", function() {
  it('should count the specified items in the array', function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result, { "Jason": 1, "Fang": 2 });
  });

  it('should return an empty object if no items to count are provided', function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, {});
    assert.deepEqual(result, {});
  });
  it('should not count items that are not specified in the itemsToCount object', function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Karima": true });
    assert.deepEqual(result, {});
  });
});
