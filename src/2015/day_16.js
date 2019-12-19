export const fifteenSixteen = (input) => {
  const instructions = input
    .split("\n")
    .filter((line) => line)
    .map((el) => {
      const splitEl = el.split(/[ ,:]/);
      return {
        id: splitEl[1],
        [splitEl[3]]: Number(splitEl[5]),
        [splitEl[7]]: Number(splitEl[9]),
        [splitEl[11]]: Number(splitEl[13]),
      };
    });

  const part1 = instructions
    .filter((aunt) => (
      (aunt.children === undefined || aunt.children === 3)
      && (aunt.cats === undefined || aunt.cats === 7)
      && (aunt.samoyeds === undefined || aunt.samoyeds === 2)
      && (aunt.pomeranians === undefined || aunt.pomeranians === 3)
      && (aunt.akitas === undefined || aunt.akitas === 0)
      && (aunt.vizslas === undefined || aunt.vizslas === 0)
      && (aunt.goldfish === undefined || aunt.goldfish === 5)
      && (aunt.trees === undefined || aunt.trees === 3)
      && (aunt.cars === undefined || aunt.cars === 2)
      && (aunt.perfumes === undefined || aunt.perfumes === 1)
    ))[0].id;

  const part2 = instructions
    .filter((aunt) => (
      (aunt.children === undefined || aunt.children === 3)
      && (aunt.cats === undefined || aunt.cats > 7)
      && (aunt.samoyeds === undefined || aunt.samoyeds === 2)
      && (aunt.pomeranians === undefined || aunt.pomeranians < 3)
      && (aunt.akitas === undefined || aunt.akitas === 0)
      && (aunt.vizslas === undefined || aunt.vizslas === 0)
      && (aunt.goldfish === undefined || aunt.goldfish < 5)
      && (aunt.trees === undefined || aunt.trees > 3)
      && (aunt.cars === undefined || aunt.cars === 2)
      && (aunt.perfumes === undefined || aunt.perfumes === 1)
    ))[0].id;

  return [part1, part2];
};

export default fifteenSixteen;
