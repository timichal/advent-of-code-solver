export const sixteenOne = (input) => {
  const instructions = input[0]
    .split(", ")
    .join("")
    .replace(/\d+/g, (match) => "M".repeat(match));

  const visitedLocs = [];
  let duplicate;
  // direction: 0 north, 1 east, 2 south, 3 west
  const planner = [...instructions].reduce(([x, y, direction], instruction) => {
    if (instruction === "R") return [x, y, (direction + 1) % 4];
    if (instruction === "L") return [x, y, direction === 0 ? 3 : direction - 1];
    if (instruction === "M") {
      const duplicates = visitedLocs.filter((loc) => loc[0] === x && loc[1] === y);
      if (!duplicate && duplicates.length > 0) [duplicate] = duplicates;
      if (!duplicate) visitedLocs.push([x, y]);

      if (direction === 0) return [x + 1, y, direction];
      if (direction === 1) return [x, y + 1, direction];
      if (direction === 2) return [x - 1, y, direction];
      if (direction === 3) return [x, y - 1, direction];
    }
    return [x, y, direction];
  }, [0, 0, 0]);

  const part1 = Math.abs(planner[0]) + Math.abs(planner[1]);
  const part2 = Math.abs(duplicate[0]) + Math.abs(duplicate[1]);
  return [part1, part2];
};

export default sixteenOne;
