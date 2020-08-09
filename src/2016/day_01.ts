export const sixteenOne = (input: string[]): [number, number] => {
  const instructions = input[0]
    .split(", ")
    .join("")
    .replace(/\d+/g, (match) => "M".repeat(Number(match)));

  const visitedLocs: [number, number][] = [];
  let firstDuplicate: undefined | [number, number];
  // direction: 0 north, 1 east, 2 south, 3 west
  const planner = [...instructions].reduce(([x, y, direction], instruction) => {
    if (instruction === "R") return [x, y, (direction + 1) % 4];
    if (instruction === "L") return [x, y, direction === 0 ? 3 : direction - 1];
    if (instruction === "M") {
      const duplicate = visitedLocs.find((loc) => loc[0] === x && loc[1] === y);
      if (!firstDuplicate && duplicate) firstDuplicate = duplicate;
      if (!firstDuplicate) visitedLocs.push([x, y]);

      if (direction === 0) return [x + 1, y, direction];
      if (direction === 1) return [x, y + 1, direction];
      if (direction === 2) return [x - 1, y, direction];
      if (direction === 3) return [x, y - 1, direction];
    }
    return [x, y, direction];
  }, [0, 0, 0]);

  const part1 = Math.abs(planner[0]) + Math.abs(planner[1]);
  const part2 = firstDuplicate ? Math.abs(firstDuplicate[0]) + Math.abs(firstDuplicate[1]) : 0;
  return [part1, part2];
};

export default sixteenOne;
