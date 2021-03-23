import { permutation } from "js-combinatorics";

const fifteenNine = (input: string[]): [number, number] => {
  const instructions = input.map((line) => line.split(" "));
  const distances: [string, string, number][] = instructions
    .map((instruction) => [instruction[0], instruction[2], Number(instruction[4])]);
  const cities = Array
    .from(new Set(distances.flat().filter((city) => typeof city === "string")));

  const routes = permutation(cities).map((combination) => (
    combination.reduce((totalLength: number, currentCity, index) => {
      const nextCity = combination[index + 1];
      const distance = distances
        .find((dist) => dist.includes(currentCity) && dist.includes(nextCity));
      return distance ? distance[2] + totalLength : totalLength;
    }, 0)
  ));
  return [Math.min(...routes), Math.max(...routes)];
};

export default fifteenNine;
