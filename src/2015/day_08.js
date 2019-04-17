function fifteenEight(input) {
  let dataChars = 0;
  let contentChars = 0;
  let escapedChars = 0;
  input
    .split("\n")
    .filter(line => line)
    .forEach((instruction) => {
      dataChars += instruction.length;
      contentChars += instruction.substring(1, instruction.length - 1)
        .replace(/\\x[0-9|a-f][0-9|a-f]/g, "x")
        .replace(/\\\\/g, "\\")
        .replace(/\\"/g, "\"").length;
      escapedChars += JSON.stringify(instruction).length;
    });

  const part1 = dataChars - contentChars;
  const part2 = escapedChars - dataChars;
  return [part1, part2];
}

export default fifteenEight;
