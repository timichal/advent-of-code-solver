export const fifteenTwo = (input) => {
  const computeDimensions = ([l, w, h]) => (
    2 * l * w
      + 2 * h * l
      + 2 * w * h
      + Math.min(l * w, w * h, h * l)
  );

  const computeRibbon = ([l, w, h]) => 2 * Math.min(l + w, w + h, h + l) + (l * w * h);

  const part1 = input
    .map((boxDimensions) => computeDimensions(boxDimensions.split("x")))
    .reduce((acc, val) => acc + val, 0);

  const part2 = input
    .map((boxDimensions) => computeRibbon(boxDimensions.split("x").map((el) => parseInt(el, 10))))
    .reduce((acc, val) => acc + val, 0);

  return [part1, part2];
};

export default fifteenTwo;
