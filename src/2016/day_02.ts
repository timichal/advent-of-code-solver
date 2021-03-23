/* eslint-disable object-property-newline */
type Coord = [number, number];

const sixteenTwo = (input: string[]): [string, string] => {
  // part 1
  const boundsLimit = (number: number) => Math.min(2, Math.max(0, number));
  const gridMover = (currentPos: Coord, move: Coord) => [
    boundsLimit(currentPos[0] + move[0]),
    boundsLimit(currentPos[1] + move[1]),
  ];

  const gridToNum = (position: Coord) => position[0] + 1 + position[1] * 3;

  // part 2
  const starPositions = {
    1: [2, 0], 2: [1, 1], 3: [2, 1], 4: [3, 1], 5: [0, 2], 6: [1, 2], 7: [2, 2],
    8: [3, 2], 9: [4, 2], A: [1, 3], B: [2, 3], C: [3, 3], D: [2, 4],
  };

  const starMover = (currentPos: Coord, move: Coord) => (Object.values(starPositions)
    .find((position) => currentPos[0] + move[0] === position[0]
      && currentPos[1] + move[1] === position[1])
    ? [currentPos[0] + move[0], currentPos[1] + move[1]]
    : currentPos);

  const starToNum = (currentPos: Coord) => Object.entries(starPositions)
    .find((position) => position[1][0] === currentPos[0]
      && position[1][1] === currentPos[1])?.[0];

  // common
  const toMoves = (move: string) => {
    if (move === "R") return [1, 0];
    if (move === "L") return [-1, 0];
    if (move === "D") return [0, 1];
    return [0, -1];
  };

  const code = (initialPos: Coord, mover: any, toNum: any) => {
    let currentPos: any = initialPos;
    return input.map((instruction) => {
      const moves = [...instruction].map(toMoves);
      currentPos = moves.reduce(mover, currentPos);
      return toNum(currentPos);
    }).join("");
  };

  return [code([1, 1], gridMover, gridToNum), code([0, 2], starMover, starToNum)];
};

export default sixteenTwo;
