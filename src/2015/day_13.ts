import { Permutation } from "js-combinatorics";

type Instruction = [string, string, number][];

export const fifteenThirteen = (input: string[]): [number, number] => {
  const instructions: Instruction = input.map((el) => {
    const splitEl = el.split(" ");
    return [
      splitEl[0][0],
      splitEl[10][0],
      splitEl[2] === "gain" ? Number(el.split(" ")[3]) : -Number(el.split(" ")[3]),
    ];
  });

  const computeHappiness = (guestList: Instruction) => {
    const guests = [...new Set(guestList.map((el) => el[0]))];
    const guestPermutations = [...new Permutation(guests)];
    const maxHappiness = Math.max(...guestPermutations.map((combination: string[]) => (
      combination
        .map((guest, index) => (
          // guests sit around a table - for ABCD, need to sum a+b b+c c+d d+a
          // but also a+d d+c c+b b+a - the relations are bidirectional
          guestList
            .filter((el) => (
              (el[0] === guest && el[1] === combination[(index + 1) % combination.length]))
              || (el[1] === guest && el[0] === combination[(index + 1) % combination.length]))
            .reduce((sum, el) => sum + Number(el[2]), 0)
        ))
        .reduce((sum, val) => sum + val, 0)
    )));

    return maxHappiness;
  };

  const addYourselfTo = (guestList: Instruction) => {
    const guests = [...new Set(guestList.map((el) => el[0]))];
    return [
      ...guestList,
      ...guests.flatMap((guest): Instruction => [[guest, "X", 0], ["X", guest, 0]]),
    ];
  };

  const part1 = computeHappiness(instructions);
  const part2 = computeHappiness(addYourselfTo(instructions));

  return [part1, part2];
};

export default fifteenThirteen;
