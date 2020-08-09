export const fifteenNineteen = (input: string[]): [number, number] => {
  const instructions = input
    .map((line) => line.split(" => "))
    .filter((line) => line.length === 2)
    .sort((a, b) => b[1].length - a[1].length);

  const molecule = input.find((line) => line && line.split(" ").length === 1) ?? "";
  const combinations = instructions
    .map((instruction) => Array
      .from(molecule.matchAll(new RegExp(instruction[0], "g")), (match) => match.index)
      .map((index = 0) => molecule.slice(0, index) + instruction[1] + molecule.slice(index + instruction[0].length)))
    .flat();
  const part1 = new Set(combinations).size;

  // part 2 reasoning: https://www.reddit.com/r/adventofcode/comments/3xflz8/day_19_solutions/cy4etju/
  const part2 = (molecule.match(/[A-Z][a-z]?/g)?.length ?? 0)
    - (molecule.match(/Rn|Ar/g)?.length ?? 0)
    - 2 * (molecule.match(/Y/g)?.length ?? 0)
    - 1;

  return [part1, part2];
};

export default fifteenNineteen;
