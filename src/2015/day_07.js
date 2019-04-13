function fifteenSeven(input) {
  const instructions = input
    .split("\n")
    .filter(line => line)
    .map(instruction => instruction
      .replace("AND", "&")
      .replace("OR", "|")
      .replace("NOT", "65535 -")
      .replace("LSHIFT", "<<")
      .replace("RSHIFT", ">>")
      .split(" -> "))
    .reduce((acc, val) => Object.assign(acc, { [val[1]]: val[0] }), {});

  function getInstructionValue(instructions, wantedInstruction) {
    while (!instructions[wantedInstruction].match(/^\d+$/)) {
      for (let i = 0; i <= Object.keys(instructions).length; i++) {
        Object.keys(instructions).forEach((instruction) => {
          if (instructions[instruction].match(/65535 - \d+|\d+ ([&|]|<<|>>) \d+/g)) {
            instructions[instruction] = String(eval(instructions[instruction]));
          }

          if (instructions[instruction].match(/^\d+$/)) {
            Object.keys(instructions).forEach((replaceInstruction) => {
              const entryRegex = new RegExp(`\\b${instruction}\\b`, "g");
              instructions[replaceInstruction] = instructions[replaceInstruction].replace(entryRegex, instructions[instruction]);
            });

            if (instruction !== wantedInstruction) delete instructions[instruction];
          }
        });
      }
    }
    return instructions[wantedInstruction];
  }

  const part1 = getInstructionValue(Object.assign({}, instructions), "a");
  instructions.b = part1;
  const part2 = getInstructionValue(Object.assign({}, instructions), "a");
  return [part1, part2];

}

export default fifteenSeven;
