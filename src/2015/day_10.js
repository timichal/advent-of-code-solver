function fifteenTen(input) {
  let part1 = input;

  function lookAndSay(string) {
    let newString = "";
    let prevChar = "";
    let count = 0;

    [...string].forEach((char) => {
      if (char === prevChar) {
        count += 1;
      } else {
        if (count !== 0) {
          newString += count + prevChar;
        }
        prevChar = char;
        count = 1;
      }
    });
    newString += count + prevChar;

    return newString;
  }

  for (let i = 0; i < 40; i++) {
    part1 = lookAndSay(part1);
  }

  let part2 = part1;

  for (let i = 0; i < 10; i++) {
    part2 = lookAndSay(part2);
  }

  return [part1.length, part2.length];
}

export default fifteenTen;
