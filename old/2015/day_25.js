export const fifteenTwentyFive = (input) => {
  const instructions = input[0].match(/\d+/g).map(Number);

  const sumRange = (start, length) => Array
    .from(Array(length), (_, index) => index + start)
    .reduce((acc, val) => acc + val, 0);

  const tableIndex = ([row, col]) => sumRange(1, col) + sumRange(col, row - 1);

  const numberAtIndex = (index) => {
    const step = (number) => (number * 252533) % 33554393;
    let cycledNumber = 20151125;
    for (let i = 1; i < index; i++) cycledNumber = step(cycledNumber);
    return cycledNumber;
  };

  return [numberAtIndex(tableIndex(instructions)), "Ho Ho Ho!"];
};

export default fifteenTwentyFive;
