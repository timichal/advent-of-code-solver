import Combinatorics from "js-combinatorics";

export const fifteenSeventeen = (input) => {
  const instructions = input
    .split("\n")
    .filter((line) => line)
    .map(Number);

  let part1 = 0;
  let minLength = Infinity;
  let part2 = 0;

  Combinatorics.power(instructions).forEach((el) => {
    if ((el.reduce((sum, acc) => sum + acc, 0)) === 150) {
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
