import { power } from "js-combinatorics";

export const fifteenSeventeen = (input) => {
  const instructions = input.map(Number);

  let part1 = 0;
  let minLength = Infinity;
  let part2 = 0;

  power(instructions).forEach((el) => {
    if ((el.reduce((acc, val) => acc + val, 0)) === 150) {
      part1 += 1;
      if (el.length < minLength) {
        minLength = el.length;
        part2 = 1;
      } else if (el.length === minLength) part2 += 1;
    }
  });

  return [part1, part2];
};

export default fifteenSeventeen;
