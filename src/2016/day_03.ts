const sixteenThree = (input: string[]): [number, number] => {
  const instructions = input.map((instruction) => instruction.match(/\d+/g)?.map(Number) ?? [0, 0, 0]);
  const isTriangle = ([a, b, c]: number[]) => a + b > c && a + c > b && b + c > a;

  const part1 = instructions.filter(isTriangle).length;
  const pivot = instructions.map((row) => row[0])
    .concat(instructions.map((row) => row[1]))
    .concat(instructions.map((row) => row[2]));
  const part2 = Array(pivot.length / 3).fill(0)
    .map((_, idx) => [pivot[3 * idx], pivot[1 + 3 * idx], pivot[2 + 3 * idx]])
    .filter(isTriangle).length;
  return [part1, part2];
};

export default sixteenThree;
