export const sixteenSix = (input) => {
  const charCount = (message) => {
    const counter = {};
    message.forEach((letter) => { counter[letter] = (counter[letter] || 0) + 1; });
    return Object.entries(counter).sort((a, b) => b[1] - a[1]);
  };

  const charCounter = [...input[0]].map((_, col) => charCount(input.map((row) => row[col])));
  const part1 = charCounter.map((entry) => entry[0][0]).join("");
  const part2 = charCounter.map((entry) => entry.reverse()[0][0]).join("");
  return [part1, part2];
};

export default sixteenSix;
