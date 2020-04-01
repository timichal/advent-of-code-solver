export const sixteenFour = (input) => {
  const instructions = input.map((line) => [
    line.match(/.*(?=-)/)[0].replace(/-/g, ""),
    Number(line.match(/\d+/)[0]),
    line.match(/\[(.*)\]/)[1],
  ]);

  const charCount = (string) => {
    const counter = {};
    [...string].forEach((letter) => { counter[letter] = (counter[letter] || 0) + 1; });
    return counter;
  };

  const topChars = (counter) => Object.entries(counter)
    .sort((a, b) => (
      b[1] - a[1] === 0 ? a[0].charCodeAt() - b[0].charCodeAt() : b[1] - a[1]
    ))
    .map((entry) => entry[0])
    .slice(0, 5)
    .join("");

  const part1 = instructions.reduce((score, instruction) => (
    score + (topChars(charCount(instruction[0])) === instruction[2] ? instruction[1] : 0)
  ), 0);

  const shiftChar = (char, shift) => String
    .fromCharCode(((char.charCodeAt() - 97 + shift) % 26) + 97);
  const rot = (string, shift) => [...string].map((char) => shiftChar(char, shift)).join("");

  const shiftedInstructions = instructions.map((instruction) => [
    rot(instruction[0], instruction[1]),
    instruction[1],
  ]);
  const part2 = shiftedInstructions.find((string) => string[0] === "northpoleobjectstorage")[1];

  return [part1, part2];
};

export default sixteenFour;
