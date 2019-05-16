import Combinatorics from "js-combinatorics";

function fifteenThirteen(input) {
  function computeHappiness(instructions) {
    const guests = [...new Set(instructions.map(el => el[0]))];
    const guestPermutations = Combinatorics.permutation(guests);

    let maxHappiness = 0;
    guestPermutations.forEach((permutation) => {
      let happiness = 0;
      permutation.forEach((guest, index) => {
        // guests sit around a table - for ABCD, need to sum a+b b+c c+d d+a
        // but also a+d d+c c+b b+a - the relations are bidirectional
        instructions
          .filter(el => (
            (el[0] === guest && el[1] === permutation[(index + 1) % permutation.length]))
            || (el[1] === guest && el[0] === permutation[(index + 1) % permutation.length]))
          .forEach((el) => { happiness += el[2]; });
      });
      maxHappiness = Math.max(maxHappiness, happiness);
    });

    return maxHappiness;
  }

  function addYourselfTo(instructions) {
    const guests = [...new Set(instructions.map(el => el[0]))];
    guests.forEach((guest) => { instructions.push([guest, "X", 0], ["X", guest, 0]); });
    return instructions;
  }

  const instructions = input
    .split("\n")
    .filter(line => line)
    .map((el) => {
      const splitEl = el.split(" ");
      return [
        splitEl[0][0],
        splitEl[10][0],
        splitEl[2] === "gain" ? Number(el.split(" ")[3]) : -Number(el.split(" ")[3]),
      ];
    });

  const part1 = computeHappiness(instructions);
  const part2 = computeHappiness(addYourselfTo(instructions));

  return [part1, part2];
}

export default fifteenThirteen;
