const fifteenTen = (input: string[]): [number, number] => {
  const instructions = input[0];

  const lookAndSay = (string: string, cycles: number) => {
    let cycledString = string;
    for (let i = 0; i < cycles; i++) {
      let newString = "";
      let prevChar = "";
      let count = 0;

      [...cycledString].forEach((char) => {
        if (char === prevChar) {
          count += 1;
        } else {
          if (count !== 0) {
            newString += count + prevChar;
          }
          prevChar = char;
          count = 1;
        }
      });
      newString += count + prevChar;
      cycledString = newString;
    }
    return cycledString;
  };

  const part1 = lookAndSay(instructions, 40);
  const part2 = lookAndSay(part1, 10);

  return [part1.length, part2.length];
};

export default fifteenTen;
