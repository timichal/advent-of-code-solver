export const fifteenOne = (input: string[]): [number, number] => {
  const instructions = [...input[0]];

  let firstBasementStep = 0;
  const finalFloor = instructions.reduce((currentFloor, instruction, step) => {
    if (!firstBasementStep && currentFloor === -1) firstBasementStep = step;
    return currentFloor + (instruction === "(" ? 1 : -1);
  }, 0);

  return [finalFloor, firstBasementStep];
};

export default fifteenOne;
