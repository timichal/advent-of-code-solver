import { sum } from "../helperFunctions";

const eighteenOne = (input: string[]): [number, number] => {
  const instructions = input.map(Number);

  const part1 = sum(instructions);

  let part2 = 0;
  const frequencies = new Set();
  let lastFrequency = 0;
  while (!part2) {
    for (let i = 0; i < instructions.length; i++) {
      const newFrequency = (lastFrequency ?? 0) + instructions[i];
      if (frequencies.has(newFrequency) && !part2) part2 = newFrequency;
      else frequencies.add(newFrequency);
      lastFrequency = newFrequency;
    }
  }
  return [part1, part2];
};

export default eighteenOne;
