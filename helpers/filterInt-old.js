const R = require("ramda");

module.exports = function (value, radix = 10) {
  if (R.is(String, value) && /^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
    return Number(value);
  }

  if (R.is(Number, value)) {
    return parseInt(value, radix);
  }

  return NaN;
}
