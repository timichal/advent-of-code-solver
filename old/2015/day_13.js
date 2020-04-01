import { permutation } from "js-combinatorics";

export const fifteenThirteen = (input) => {
  const instructions = input.map((el) => {
    const splitEl = el.split(" ");
    return [
      splitEl[0][0],
      splitEl[10][0],
      splitEl[2] === "gain" ? Number(el.split(" ")[3]) : -Number(el.split(" ")[3]),
    ];
  });

  const computeHappiness = (guestList) => {
    const guests = [...new Set(guestList.map((el) => el[0]))];
    const guestPermutations = permutation(guests);
    const maxHappiness = Math.max(...guestPermutations.map((combination) => (
      combination
        .map((guest, index) => (
          // guests sit around a table - for ABCD, need to sum a+b b+c c+d d+a
          // but also a+d d+c c+b b+a - the relations are bidirectional
          guestList
            .filter((el) => (
              (el[0] === guest && el[1] === combination[(index + 1) % combination.length]))
              || (el[1] === guest && el[0] === combination[(index + 1) % combination.length]))
            .reduce((sum, el) => sum + el[2], 0)
        ))
        .reduce((sum, val) => sum + val, 0)
    )));

    return maxHappiness;
  };

  const addYourselfTo = (guestList) => {
    const guests = [...new Set(guestList.map((el) => el[0]))];
    return [
      ...guestList,
      guests.map((guest) => [[guest, "X", 0], ["X", guest, 0]]).flat(),
    ];
  };

  const part1 = computeHappiness(instructions);
  const part2 = computeHappiness(addYourselfTo(instructions));

  return [part1, part2];
};

export default fifteenThirteen;
