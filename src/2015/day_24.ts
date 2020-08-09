import { combination } from "js-combinatorics";
import { sum } from "../helperFunctions";

export const fifteenTwentyFour = (input: string[]): [number, number] => {
  const instructions = input.map(Number);

  const findLeastValidPackages = (packages: number[], groups: number) => {
    const groupSize = sum(packages) / groups;
    for (let amount = 1; ; amount++) {
      const combinations = combination(packages, amount)
        .filter((comb) => sum(comb) === groupSize);
      if (combinations.length > 0) return combinations;
    }
  };

  const findLeastEntaglement = (packages: number[], groups: number) => (
    Math.min(...findLeastValidPackages(packages, groups)
      .map((packageSet) => packageSet.reduce((acc: number, val: number) => acc * val, 1)))
  );

  const part1 = findLeastEntaglement(instructions, 3);
  const part2 = findLeastEntaglement(instructions, 4);
  return [part1, part2];
};

export default fifteenTwentyFour;
