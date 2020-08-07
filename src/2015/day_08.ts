export const fifteenEight = (input: string[]): [number, number] => {
  const [dataChars, contentChars, escapedChars] = input
    .reduce(([dataCounter, contentCounter, escapedCounter], instruction) => [
      dataCounter + instruction.length,
      contentCounter + instruction.substring(1, instruction.length - 1)
        .replace(/\\x[0-9|a-f][0-9|a-f]/g, "x")
        .replace(/\\\\/g, "\\")
        .replace(/\\"/g, "\"").length,
      escapedCounter + JSON.stringify(instruction).length,
    ], [0, 0, 0]);

  const part1 = dataChars - contentChars;
  const part2 = escapedChars - dataChars;
  return [part1, part2];
};

export default fifteenEight;
