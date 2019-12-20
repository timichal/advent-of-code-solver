export const fifteenFourteen = (input) => {
  const instructions = input.map((el) => {
    const splitEl = el.split(" ");
    return {
      speed: Number(splitEl[3]),
      flightTime: Number(splitEl[6]),
      restTime: Number(splitEl[13]),
      isResting: false,
      cyclePosition: 0,
      distanceTravelled: 0,
      points: 0,
    };
  });

  const moveReindeer = (reindeer, seconds) => {
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
      const leadingDistance = Math.max(...reindeer.map((deer) => deer.distanceTravelled));
      reindeer.forEach((deer) => {
        if (deer.distanceTravelled === leadingDistance) deer.points += 1;
      });
    }

    return reindeer;
  };

  const race = moveReindeer(instructions.map((deer) => ({ ...deer })), 2503);
  const part1 = Math.max(...race.map((deer) => deer.distanceTravelled));
  const part2 = Math.max(...race.map((deer) => deer.points));
  return [part1, part2];
};

export default fifteenFourteen;
