// FUNCTION IMPLEMENTATION

const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe("#countOnly", () => {
  it("returns 1 for Jason", () => {
    assert.strictEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Agouhanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe",
        ],
        {
          Jason: true,
          Karima: true,
          Fang: true,
          Agouhanna: false,
        }
      )["Jason"],
      1
    );
  });

  it("returns undefined for Karima", () => {
    //Not the array
    assert.strictEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Agouhanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe",
        ],
        {
          Jason: true,
          Karima: true,
          Fang: true,
          Agouhanna: false,
        }
      )["Karima"],
      undefined
    );
  });

  it("returns undefined for Agouhanna", () => {
    //False in the count list
    assert.strictEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Agouhanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe",
        ],
        {
          Jason: true,
          Karima: true,
          Fang: true,
          Agouhanna: false,
        }
      )["Agouhanna"],
      undefined
    );
  });
});
