const seventeenOne = (input: string[]): [number, number] => {
  const instructions = input[0].split("").map(Number);

  const circularInstructions = [...instructions, instructions[0]];
  let previousNumber = 0;
  let part1 = 0;
  circularInstructions.forEach((number) => {
    if (number === previousNumber) part1 += number;
    previousNumber = number;
  });

  let part2 = 0;
  instructions.forEach((number, index) => {
    if (number === instructions[(index + instructions.length / 2) % instructions.length]) {
      part2 += number;
    }
    previousNumber = number;
  });

  return [part1, part2];
};

export default seventeenOne;
