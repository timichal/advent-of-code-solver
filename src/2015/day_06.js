export const fifteenSix = (input) => {
  const matrixOne = Array(1000).fill(0).map(() => Array(1000).fill(0));
  const matrixTwo = Array(1000).fill(0).map(() => Array(1000).fill(0));

  input.forEach((instruction) => {
    const [xStart, yStart, xEnd, yEnd] = instruction.match(/\d+/g).map(Number);
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

  const partOne = matrixOne.flat().reduce((acc, val) => acc + val, 0);
  const partTwo = matrixTwo.flat().reduce((acc, val) => acc + val, 0);
  return [partOne, partTwo];
};

export default fifteenSix;
