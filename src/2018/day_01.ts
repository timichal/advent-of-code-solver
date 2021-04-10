import { sum } from "../helperFunctions";

const eighteenOne = (input: string[]): [number, number] => {
  const instructions = input.map(Number);

  const part1 = sum(instructions);

  let part2 = 0;
  const frequencies: number[] = [];
  while (!part2) {
    instructions.forEach((instruction) => {
      const lastFrequency = frequencies.slice(-1)[0];
      const newFrequency = (lastFrequency ?? 0) + instruction;
      if (frequencies.includes(newFrequency) && !part2) part2 = newFrequency;
      else frequencies.push(newFrequency);
    });
  }
  return [part1, part2];
};

export default eighteenOne;
