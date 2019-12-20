export const fifteenSeven = (input) => {
  const instructions = input
    .map((instruction) => instruction
      .replace("AND", "&")
      .replace("OR", "|")
      .replace("NOT", "65535 -")
      .replace("LSHIFT", "<<")
      .replace("RSHIFT", ">>")
      .split(" -> "))
    .reduce((acc, val) => Object.assign(acc, { [val[1]]: val[0] }), {});

  const getInstructionValue = (register, wantedInstruction) => {
    while (!register[wantedInstruction].match(/^\d+$/)) {
      Object.keys(register).forEach(() => {
        Object.keys(register).forEach((instruction) => {
          if (register[instruction].match(/65535 - \d+|\d+ ([&|]|<<|>>) \d+/g)) {
            register[instruction] = String(eval(register[instruction]));
          }

          if (register[instruction].match(/^\d+$/)) {
            Object.keys(register).forEach((replaceInstruction) => {
              const entryRegex = new RegExp(`\\b${instruction}\\b`, "g");
              register[replaceInstruction] = register[replaceInstruction]
                .replace(entryRegex, register[instruction]);
            });

            if (instruction !== wantedInstruction) delete register[instruction];
          }
        });
      });
    }
    return register[wantedInstruction];
  };

  const part1 = getInstructionValue({ ...instructions }, "a");
  const part2 = getInstructionValue({ ...instructions, b: part1 }, "a");
  return [part1, part2];
};

export default fifteenSeven;
