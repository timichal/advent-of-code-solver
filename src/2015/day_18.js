export const fifteenEighteen = (input) => {
  const instructions = input
    .split("\n")
    .filter((line) => line)
    .map((line) => [...line]);

  /*
    A light which is on stays on when 2 or 3 neighbors are on, and turns off otherwise.
    A light which is off turns on if exactly 3 neighbors are on, and stays off otherwise.
  */

  const litNeighbors = (grid, x, y) => {
    let lit = 0;
    if (grid[x - 1]) {
      if (grid[x - 1][y - 1] === "#") lit += 1;
      if (grid[x - 1][y] === "#") lit += 1;
      if (grid[x - 1][y + 1] === "#") lit += 1;
    }

    if (grid[x][y - 1] === "#") lit += 1;
    if (grid[x][y + 1] === "#") lit += 1;

    if (grid[x + 1]) {
      if (grid[x + 1][y - 1] === "#") lit += 1;
      if (grid[x + 1][y] === "#") lit += 1;
      if (grid[x + 1][y + 1] === "#") lit += 1;
    }

    return lit;
  };

  const gridStep = (grid, cornerLightStuck) => {
    const oldGrid = grid;
    return grid.map((row, rowNo) => row.map((light, colNo) => {
      if (cornerLightStuck) {
        if ((rowNo === 0 && colNo === 0)
          || (rowNo === 0 && colNo === row.length - 1)
          || (rowNo === row.length - 1 && colNo === 0)
          || (rowNo === row.length - 1 && colNo === row.length - 1)) { return "#"; }
      }

      if (light === "#") {
        if (litNeighbors(oldGrid, rowNo, colNo) === 2 || litNeighbors(oldGrid, rowNo, colNo) === 3) return "#";
        return ".";
      }
      // else light === "."
      if (litNeighbors(oldGrid, rowNo, colNo) === 3) return "#";
      return ".";
    }));
  }

  let part1Grid = instructions;
  for (let i = 0; i < 100; i++) part1Grid = gridStep(part1Grid);
  let part2Grid = instructions;
  for (let i = 0; i < 100; i++) part2Grid = gridStep(part2Grid, true);

  const part1 = JSON.stringify(part1Grid).match(/#/g).length;
  const part2 = JSON.stringify(part2Grid).match(/#/g).length;

  return [part1, part2];
}

export default fifteenEighteen;
