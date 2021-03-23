import { permutation } from "js-combinatorics";
import { sum } from "../helperFunctions";

type Instruction = [string, string, number][];

const fifteenThirteen = (input: string[]): [number, number] => {
  const instructions: Instruction = input.map((instruction) => {
    const splitInstruction = instruction.split(" ");
    return [
      splitInstruction[0][0],
      splitInstruction[10][0],
      splitInstruction[2] === "gain" ? Number(instruction.split(" ")[3]) : -Number(instruction.split(" ")[3]),
    ];
  });

  const computeHappiness = (guestList: Instruction) => {
    const guests = [...new Set(guestList.map((pairing) => pairing[0]))];
    const guestPermutations = permutation(guests);
    const maxHappiness = Math.max(...guestPermutations.map((combination: string[]) => sum(
      combination
        .map((guest, index) => (
          // guests sit around a table - for ABCD, need to sum a+b b+c c+d d+a
          // but also a+d d+c c+b b+a - the relations are bidirectional
          guestList
            .filter((pairing) => (
              (pairing[0] === guest && pairing[1] === combination[(index + 1) % combination.length]))
              || (pairing[1] === guest && pairing[0] === combination[(index + 1) % combination.length]))
            .reduce((total, pairing) => total + Number(pairing[2]), 0)
        )),
    )));

    return maxHappiness;
  };

  const addYourselfTo = (guestList: Instruction) => {
    const guests = [...new Set(guestList.map((pairing) => pairing[0]))];
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
