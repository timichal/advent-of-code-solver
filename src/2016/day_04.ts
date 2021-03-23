type Counter = {[letter: string]: number};

const sixteenFour = (input: string[]): [number, number] => {
  const instructions: [string, number, string][] = input.map((line) => [
    line.match(/.*(?=-)/)?.[0].replace(/-/g, "") ?? "",
    Number(line.match(/\d+/)?.[0]) ?? 0,
    line.match(/\[(.*)\]/)?.[1] ?? "",
  ]);

  const charCount = (string: string) => {
    const counter: Counter = {};
    [...string].forEach((letter) => { counter[letter] = (counter[letter] || 0) + 1; });
    return counter;
  };

  const topChars = (counter: Counter) => Object.entries(counter)
    .sort((a, b) => (
      b[1] - a[1] === 0 ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]
    ))
    .map((entry) => entry[0])
    .slice(0, 5)
    .join("");

  const part1 = instructions.reduce((score, instruction) => (
    score + (topChars(charCount(instruction[0])) === instruction[2] ? instruction[1] : 0)
  ), 0);

  const shiftChar = (char: string, shift: number) => String
    .fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
  const rot = (string: string, shift: number) => [...string].map((char) => shiftChar(char, shift)).join("");

  const shiftedInstructions = instructions.map((instruction) => [
    rot(instruction[0], instruction[1]),
    instruction[1],
  ]);
  const part2 = Number(shiftedInstructions.find((string) => string[0] === "northpoleobjectstorage")?.[1]);

  return [part1, part2];
};

export default sixteenFour;
