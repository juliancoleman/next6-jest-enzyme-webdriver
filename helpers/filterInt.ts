import { is } from "ramda";

export default function (value: any, radix: number = 10): number {
  if (is(String, value) && /^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
    return Number(value);
  }

  if (is(Number, value)) {
    return parseInt(value, radix);
  }

  return NaN;
}
