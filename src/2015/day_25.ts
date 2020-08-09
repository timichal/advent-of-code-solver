import { sum } from "../helperFunctions";

export const fifteenTwentyFive = (input: string[]): [number, string] => {
  const instructions = input[0].match(/\d+/g)?.map(Number) || [0, 0];

  const sumRange = (start: number, length: number) => sum(Array.from(Array(length), (_, index) => index + start));

  const tableIndex = ([row, col]: number[]) => sumRange(1, col) + sumRange(col, row - 1);

  const numberAtIndex = (index: number) => {
    const step = (number: number) => (number * 252533) % 33554393;
    let cycledNumber = 20151125;
    for (let i = 1; i < index; i++) cycledNumber = step(cycledNumber);
    return cycledNumber;
  };

  return [numberAtIndex(tableIndex(instructions)), "Ho Ho Ho!"];
};

export default fifteenTwentyFive;
