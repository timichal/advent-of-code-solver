import { Combination } from "js-combinatorics";

export const fifteenTwentyFour = (input: string[]): [number, number] => {
  const instructions = input.map(Number);

  const findLeastValidPackages = (packages: number[], groups: number) => {
    const groupSize = packages.reduce((acc: any, val: any) => acc + val, 0) / groups;
    for (let amount = 8; ; amount++) {
      const combinations = [...new Combination(packages, amount)].map((c: any) => c.reduce((acc: any, val: any) => acc + val, 0));
      console.log(groupSize, combinations)
        //.filter((combination: any) => combination.reduce((acc: any, val: any) => acc + val, 0) === groupSize);
      if (combinations.length > 0) return combinations;
    }
  };

  const findLeastEntaglement = (packages: number[], groups: number) => (
    Math.min(...findLeastValidPackages(packages, groups)
      .map((packageSet: any) => packageSet.reduce((acc: any, val: any) => acc * val, 1)))
  );

  const part1 = findLeastEntaglement(instructions, 2);
  //const part2 = findLeastEntaglement(instructions, 4);
  return [part1, 0];
};

export default fifteenTwentyFour;
