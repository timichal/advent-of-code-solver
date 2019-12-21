export const fifteenOne = (input) => {
  const instructions = [...input[0]];

  let part2;
  const part1 = instructions.reduce((floor, instruction, index) => {
    if (!part2 && floor === -1) part2 = index;
    return floor + (instruction === "(" ? 1 : -1);
  }, 0);

  return [part1, part2];
};

export default fifteenOne;
