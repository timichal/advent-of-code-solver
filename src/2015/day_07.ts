/* eslint-disable no-param-reassign */
/* eslint-disable no-eval */
const fifteenSeven = (input: string[]): [number, number] => {
  const instructions = input
    .map((instruction) => instruction
      .replace("AND", "&")
      .replace("OR", "|")
      .replace("NOT", "65535 -")
      .replace("LSHIFT", "<<")
      .replace("RSHIFT", ">>")
      .split(" -> "))
    .reduce((object, entry) => Object.assign(object, { [entry[1]]: entry[0] }), {});

  const getInstructionValue = (register: { [key: string]: string }, wantedInstruction: string) => {
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
  return [Number(part1), Number(part2)];
};

export default fifteenSeven;
