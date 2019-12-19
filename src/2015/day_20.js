export const fifteenTwenty = (input) => {
  const instructions = input.trim();

  // blazing fast factor algorithm lifted from https://stackoverflow.com/questions/22130043/trying-to-find-factors-of-a-number-in-js
  const getFactors = (num) => {
    const isEven = num % 2 === 0;
    const inc = isEven ? 1 : 2;
    const factors = [1, num];
    const root = Math.sqrt(num);

    for (let curFactor = isEven ? 2 : 3; curFactor <= root; curFactor += inc) {
      if (num % curFactor === 0) {
        factors.push(curFactor);
        const compliment = num / curFactor;
        if (compliment !== curFactor) factors.push(compliment);
      }
    }

    return factors;
  };

  const getHouseNumber = (minPresents, limited) => {
    for (let x = 1; ; x++) {
      const sum = !limited
        ? getFactors(x).reduce((acc, val) => acc + val * 10, 0)
        : getFactors(x).filter((factor) => factor * 50 >= x).reduce((acc, val) => acc + val * 11, 0);
      if (sum >= minPresents) return x;
    }
  };

  const part1 = getHouseNumber(instructions);
  const part2 = getHouseNumber(instructions, true);
  return [part1, part2];
};

export default fifteenTwenty;
