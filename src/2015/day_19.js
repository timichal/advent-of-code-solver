function fifteenNineteen(input) {
  const instructions = input
    .split("\n")
    .map(line => line.split(" => "))
    .filter(line => line.length === 2)
    .sort((a, b) => b[1].length - a[1].length);

  const molecule = input.split("\n").filter(line => line && line.split(" ").length === 1)[0];
  const combinations = [];
  instructions.forEach((instruction) => {
    const indices = Array.from(molecule.matchAll(instruction[0]), match => match.index);
    combinations.push(...indices.map(index => (
      molecule.slice(0, index) + instruction[1] + molecule.slice(index + instruction[0].length)
    )));
  });

  const part1 = new Set(combinations).size;

  // part 2 reasoning: https://www.reddit.com/r/adventofcode/comments/3xflz8/day_19_solutions/cy4etju/
  const part2 = molecule.match(/[A-Z][a-z]?/g).length
    - molecule.match(/Rn|Ar/g).length
    - 2 * molecule.match(/Y/g).length
    - 1;

  return [part1, part2];
}

export default fifteenNineteen;
