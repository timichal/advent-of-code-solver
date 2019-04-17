import Combinatorics from "js-combinatorics";

function fifteenNine(input) {
  const cities = [];
  const dist = [];

  input
    .split("\n")
    .filter(line => line)
    .forEach((instruction) => {
      const city1 = instruction.split(" ")[0];
      const city2 = instruction.split(" ")[2];
      dist.push([city1, city2, Number(instruction.split(" ")[4])]);
      if (!cities.includes(city1)) cities.push(city1);
      if (!cities.includes(city2)) cities.push(city2);
    });

  const citiesCombined = Combinatorics.permutation(cities).toArray();
  const citylens = [];

  citiesCombined.forEach((combination) => {
    let citylen = 0;
    for (let pos = 0; pos < cities.length; pos++) {
      dist.forEach((distpair) => {
        if (distpair.includes(combination[pos]) && distpair.includes(combination[pos + 1])) {
          citylen += distpair[2];
        }
      });
    }
    citylens.push(citylen);
  });
  const part1 = Math.min(...citylens);
  const part2 = Math.max(...citylens);
  return [part1, part2];
}

export default fifteenNine;
