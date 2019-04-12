function fifteenTwo(input) {
  function computeDimensions([l, w, h]) {
    return 2 * l * w
      + 2 * h * l
      + 2 * w * h
      + Math.min(l * w, w * h, h * l);
  }

  function computeRibbon([l, w, h]) {
    return 2 * Math.min(l + w, w + h, h + l) + l * w * h;
  }

  const part1 = input
    .split("\n")
    .filter(line => line)
    .map(boxDimensions => computeDimensions(boxDimensions.split("x")))
    .reduce((acc, val) => acc + val, 0);

  const part2 = input
    .split("\n")
    .filter(line => line)
    .map(boxDimensions => computeRibbon(boxDimensions.split("x").map(el => parseInt(el, 10))))
    .reduce((acc, val) => acc + val, 0);

  return [part1, part2];
}

export default fifteenTwo;
