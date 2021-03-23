import { power } from "js-combinatorics";
import { sum } from "../helperFunctions";

const fifteenSeventeen = (input: string[]): [number, number] => {
  const instructions = input.map(Number);

  let part1 = 0;
  let minLength = Infinity;
  let part2 = 0;

  power(instructions).forEach((containerSet: number[]) => {
    if (sum(containerSet) === 150) {
      part1 += 1;
      if (containerSet.length < minLength) {
        minLength = containerSet.length;
        part2 = 1;
      } else if (containerSet.length === minLength) part2 += 1;
    }
  });

  return [part1, part2];
};

export default fifteenSeventeen;
