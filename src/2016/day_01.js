export const sixteenOne = (input) => {
  const instructions = input[0].split(", ");
  let [x, y, direction] = [0, 0, 0];
  let duplicate;
  const visitedLocs = [];
  // direction: 0 north, 1 east, 2 south, 3 west
  instructions.forEach((instruction) => {
    if (instruction[0] === "R") direction = (direction + 1) % 4;
    else direction = direction === 0 ? 3 : direction - 1;

    const steps = Number(instruction.substring(1));
    Array.from(Array(steps)).forEach(() => {
      if (direction === 0) x += 1;
      else if (direction === 1) y += 1;
      else if (direction === 2) x -= 1;
      else if (direction === 3) y -= 1;
      const duplicates = visitedLocs.filter((loc) => loc[0] === x && loc[1] === y);
      if (!duplicate && duplicates.length > 0) [duplicate] = duplicates;
      if (!duplicate) visitedLocs.push([x, y]);
    });
  });

  const part1 = Math.abs(x) + Math.abs(y);
  const part2 = Math.abs(duplicate[0]) + Math.abs(duplicate[1]);
  return [part1, part2];
};

export default sixteenOne;
