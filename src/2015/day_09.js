import { permutation } from "js-combinatorics";

export const fifteenNine = (input) => {
  const cities = [];
  const dist = input.map((line) => {
    const instruction = line.split(" ");
    const [city1, city2, distance] = [instruction[0], instruction[2], Number(instruction[4])];
    if (!cities.includes(city1)) cities.push(city1);
    if (!cities.includes(city2)) cities.push(city2);
    return [city1, city2, distance];
  });

  const citiesCombined = permutation(cities).toArray();
  const citylens = citiesCombined.map((combination) => {
    let citylen = 0;
    cities.forEach((_, pos) => {
      dist.forEach((distpair) => {
        if (distpair.includes(combination[pos]) && distpair.includes(combination[pos + 1])) {
          citylen += distpair[2];
        }
      });
    });
    return citylen;
  });

  const part1 = Math.min(...citylens);
  const part2 = Math.max(...citylens);
  return [part1, part2];
};

export default fifteenNine;
