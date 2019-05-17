function fifteenOne(input) {
  let part1 = 0;
  let part2 = null;

  [...input].forEach((char, index) => {
    if (char === "(") part1 += 1;
    else if (char === ")") part1 -= 1;

    if (part1 === -1 && part2 === null) part2 = index + 1;
  });

  return [part1, part2];
}

export default fifteenOne;
