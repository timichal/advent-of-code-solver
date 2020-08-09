export const fifteenTwentyThree = (input: string[]): [number, number] => {
  const instructions = input.map((line) => line.split(/,? /g));

  const computer = (aValue: number) => {
    const register: { [key: string]: number } = { a: aValue, b: 0 };
    let position = 0;
    for (;;) {
      const instruction = instructions[position];
      if (instruction[0] === "hlf") {
        register[instruction[1]] /= 2;
        position += 1;
      } else if (instruction[0] === "tpl") {
        register[instruction[1]] *= 3;
        position += 1;
      } else if (instruction[0] === "inc") {
        register[instruction[1]] += 1;
        position += 1;
      } else if (instruction[0] === "jmp") {
        position += Number(instruction[1]);
      } else if (instruction[0] === "jie") {
        if (register[instruction[1]] % 2 === 0) position += Number(instruction[2]);
        else position += 1;
      } else if (instruction[0] === "jio") {
        if (register[instruction[1]] === 1) position += Number(instruction[2]);
        else position += 1;
      }

      if (position >= instructions.length) return register.b;
    }
  };

  const [part1, part2] = [computer(0), computer(1)];
  return [part1, part2];
};

export default fifteenTwentyThree;
