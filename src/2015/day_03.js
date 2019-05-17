function fifteenThree(input) {
  function part1(directions) {
    let locX = 0;
    let locY = 0;
    const visitedLocs = [[0, 0]];

    [...directions].forEach((char) => {
      if (char === "^") locX += 1;
      else if (char === "v") locX -= 1;
      else if (char === ">") locY += 1;
      else if (char === "<") locY -= 1;

      visitedLocs.push([locX, locY]);
    });

    return new Set(visitedLocs.map(JSON.stringify)).size;
  }

  function part2(directions) {
    let locX = 0;
    let locY = 0;
    let roboLocX = 0;
    let roboLocY = 0;
    let roboTurn = false;
    const visitedLocs = [[0, 0]];

    directions.split("").forEach((char) => {
      if (char === "^") roboTurn ? roboLocX += 1 : locX += 1;
      else if (char === "v") roboTurn ? roboLocX -= 1 : locX -= 1;
      else if (char === ">") roboTurn ? roboLocY += 1 : locY += 1;
      else if (char === "<") roboTurn ? roboLocY -= 1 : locY -= 1;
      roboTurn ? visitedLocs.push([roboLocX, roboLocY]) : visitedLocs.push([locX, locY]);
      roboTurn = !roboTurn;
    });
    return new Set(visitedLocs.map(JSON.stringify)).size;
  }
  return [part1(input), part2(input)];
}

export default fifteenThree;
