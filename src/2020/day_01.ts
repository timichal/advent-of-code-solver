import { bigCombination } from "js-combinatorics";

const twentyOne = (input: string[]): [number, number] => {
  const instructions = input.map(Number);
  const part1 = () => {
    const combinations = bigCombination(instructions, 2).toArray();
    return (combinations.find((combination) => combination[0] + combination[1] === 2020) ?? [0, 0])
      .reduce((acc, val) => acc * val, 1);
  };

  const part2 = () => {
    const combinations = bigCombination(instructions, 3).toArray();
    return (combinations.find((combination) => combination[0] + combination[1] + combination[2] === 2020) ?? [0, 0])
      .reduce((acc, val) => acc * val, 1);
  };

  return [part1(), part2()];
};

export default twentyOne;
