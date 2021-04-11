const nineteenOne = (input: string[]): [number, number] => {
  const instructions = input.map(Number);
  const part1 = instructions.reduce((total, mass) => total + (Math.floor(mass / 3) - 2), 0);

  const iterativeFuel = (mass: number) => {
    let totalFuel = 0;
    while (mass > 0) {
      const fuel = Math.floor(mass / 3) - 2;
      if (fuel > 0) totalFuel += fuel;
      mass = fuel;
    }
    return totalFuel;
  };

  const part2 = instructions.reduce((total, mass) => total + iterativeFuel(mass), 0);

  return [part1, part2];
};

export default nineteenOne;
