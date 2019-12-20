export const fifteenOne = (input) => {
  const instructions = [...input[0]];
  let part1 = 0;
  let part2;

  instructions.forEach((char, index) => {
    part1 += char === "(" ? 1 : -1;
    if (!part2 && part1 === -1) part2 = index + 1;
  });

  return [part1, part2];
};

export default fifteenOne;
