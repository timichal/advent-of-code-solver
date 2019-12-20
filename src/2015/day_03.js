export const fifteenThree = (input) => {
  const instructions = [...input[0]];

  const part1 = (directions) => {
    let locX = 0;
    let locY = 0;
    const visitedLocs = [[0, 0]];

    directions.forEach((char) => {
      if (char === "^") locX += 1;
      else if (char === "v") locX -= 1;
      else if (char === ">") locY += 1;
      else if (char === "<") locY -= 1;

      visitedLocs.push([locX, locY]);
    });

    return new Set(visitedLocs.map(JSON.stringify)).size;
  };

  const part2 = (directions) => {
    let locX = 0;
    let locY = 0;
    let roboLocX = 0;
    let roboLocY = 0;
    let roboTurn = false;
    const visitedLocs = [[0, 0]];

    directions.forEach((char) => {
      if (char === "^") roboTurn ? roboLocX += 1 : locX += 1;
      else if (char === "v") roboTurn ? roboLocX -= 1 : locX -= 1;
      else if (char === ">") roboTurn ? roboLocY += 1 : locY += 1;
      else if (char === "<") roboTurn ? roboLocY -= 1 : locY -= 1;
      roboTurn ? visitedLocs.push([roboLocX, roboLocY]) : visitedLocs.push([locX, locY]);
      roboTurn = !roboTurn;
    });
    return new Set(visitedLocs.map(JSON.stringify)).size;
  };
  return [part1(instructions), part2(instructions)];
};

export default fifteenThree;
