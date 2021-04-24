import { sum } from "../helperFunctions";
import { combination } from "js-combinatorics";

const seventeenTwo = (input: string[]): [number, number] => {
  const instructions = input.map((line) => line.split("\t").map((element) => Number(element)));
  const part1 = sum(instructions.map((row) => Math.max(...row) - Math.min(...row)));

  const evenlyDivisible = instructions.map((row) => combination(row, 2)
    .map((comb) => comb.sort((a, b) => b - a))
    .find(([a, b]) => a % b === 0) ?? [0, 0]);
  const part2 = sum(evenlyDivisible.map((pair) => pair[0] / pair[1]));
  return [part1, part2];
};

export default seventeenTwo;
