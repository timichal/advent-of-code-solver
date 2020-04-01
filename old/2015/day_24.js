import { combination } from "js-combinatorics";

export const fifteenTwentyFour = (input) => {
  const instructions = input.map(Number);

  const findLeastValidPackages = (packages, groups) => {
    const groupSize = packages.reduce((acc, val) => acc + val, 0) / groups;
    for (let amount = 1; ; amount++) {
      const combinations = combination(packages, amount)
        .filter((comb) => comb.reduce((acc, val) => acc + val, 0) === groupSize);
      if (combinations.length > 0) return combinations;
    }
  };

  const findLeastEntaglement = (packages, groups) => (
    Math.min(...findLeastValidPackages(packages, groups)
      .map((packageSet) => packageSet.reduce((acc, val) => acc * val, 1)))
  );

  const part1 = findLeastEntaglement(instructions, 3);
  const part2 = findLeastEntaglement(instructions, 4);
  return [part1, part2];
};

export default fifteenTwentyFour;
