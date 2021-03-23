const fifteenSixteen = (input: string[]): [number, number] => {
  const instructions = input.map((instruction) => {
    const splitInstruction = instruction.split(/[ ,:]/);
    return {
      id: Number(splitInstruction[1]),
      [splitInstruction[3]]: Number(splitInstruction[5]),
      [splitInstruction[7]]: Number(splitInstruction[9]),
      [splitInstruction[11]]: Number(splitInstruction[13]),
    };
  });

  const eq = (property: number, amount: number) => property === undefined || property === amount;
  const more = (property: number, amount: number) => property === undefined || property > amount;
  const less = (property: number, amount: number) => property === undefined || property < amount;

  const part1 = instructions.find((aunt) => (
    eq(aunt.children, 3)
    && eq(aunt.cats, 7)
    && eq(aunt.samoyeds, 2)
    && eq(aunt.pomeranians, 3)
    && eq(aunt.akitas, 0)
    && eq(aunt.vizslas, 0)
    && eq(aunt.goldfish, 5)
    && eq(aunt.trees, 3)
    && eq(aunt.cars, 2)
    && eq(aunt.perfumes, 1)
  ))?.id;

  const part2 = instructions.find((aunt) => (
    eq(aunt.children, 3)
    && more(aunt.cats, 7)
    && eq(aunt.samoyeds, 2)
    && less(aunt.pomeranians, 3)
    && eq(aunt.akitas, 0)
    && eq(aunt.vizslas, 0)
    && less(aunt.goldfish, 5)
    && more(aunt.trees, 3)
    && eq(aunt.cars, 2)
    && eq(aunt.perfumes, 1)
  ))?.id;

  return [Number(part1), Number(part2)];
};

export default fifteenSixteen;
