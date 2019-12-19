export const fifteenSix = (input) => {
  const matrixOne = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
  const matrixTwo = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
  input
    .split("\n")
    .filter((line) => line)
    .forEach((instruction) => {
      const [xStart, yStart, xEnd, yEnd] = instruction.match(/\d+/g).map((number) => parseInt(number, 10));
      for (let x = xStart; x <= xEnd; x++) {
        for (let y = yStart; y <= yEnd; y++) {
          if (instruction.startsWith("turn on")) {
            matrixOne[x][y] = 1;
            matrixTwo[x][y] += 1;
          } else if (instruction.startsWith("turn off")) {
            matrixOne[x][y] = 0;
            matrixTwo[x][y] = matrixTwo[x][y] > 0 ? matrixTwo[x][y] - 1 : 0;
          } else if (instruction.startsWith("toggle")) {
            matrixOne[x][y] = !matrixOne[x][y];
            matrixTwo[x][y] += 2;
          }
        }
      }
    });
  let partOne = 0;
  let partTwo = 0;
  matrixOne.forEach((row) => row.forEach((light) => { partOne += light; }));
  matrixTwo.forEach((row) => row.forEach((light) => { partTwo += light; }));
  return [partOne, partTwo];
}

export default fifteenSix;
