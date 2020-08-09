/* eslint-disable no-param-reassign */
type Deer = {
  speed: number,
  flightTime: number,
  restTime: number,
  isResting: boolean,
  cyclePosition: number,
  distanceTravelled: number,
  points: number,
};

export const fifteenFourteen = (input: string[]): [number, number] => {
  const instructions: Deer[] = input.map((instruction) => {
    const splitInstruction = instruction.split(" ");
    return {
      speed: Number(splitInstruction[3]),
      flightTime: Number(splitInstruction[6]),
      restTime: Number(splitInstruction[13]),
      isResting: false,
      cyclePosition: 0,
      distanceTravelled: 0,
      points: 0,
    };
  });

  const moveReindeer = (reindeer: Deer[], seconds: number) => {
    for (let i = 0; i < seconds; i++) {
      reindeer.forEach((deer) => {
        deer.cyclePosition += 1;

        // move the reindeer if it's not resting
        if (!deer.isResting) deer.distanceTravelled += deer.speed;

        // switch state if it's the last second of the cycle
        if ((!deer.isResting && deer.cyclePosition === deer.flightTime)
          || (deer.isResting && deer.cyclePosition === deer.restTime)) {
          deer.isResting = !deer.isResting;
          deer.cyclePosition = 0;
        }
      });

      // award points to reindeer in the lead
      const leadingDistance = Math.max(...reindeer.map((deer: Deer) => deer.distanceTravelled));
      reindeer.forEach((deer: Deer) => {
        if (deer.distanceTravelled === leadingDistance) deer.points += 1;
      });
    }

    return reindeer;
  };

  const race = moveReindeer(instructions.map((deer) => ({ ...deer })), 2503);
  const part1 = Math.max(...race.map((deer: Deer) => deer.distanceTravelled));
  const part2 = Math.max(...race.map((deer: Deer) => deer.points));
  return [part1, part2];
};

export default fifteenFourteen;
