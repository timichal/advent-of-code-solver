const fifteenOne = (input: string[]): [number, number] => {
  const instructions = [...input[0]];
  let currentFloor = 0;
  let firstBasementStep = 0;
  instructions.forEach((instruction, stepIndex) => {
    if (!firstBasementStep && currentFloor === -1) firstBasementStep = stepIndex;

    if (instruction === "(") currentFloor += 1;
    else currentFloor -= 1;
  });

  return [currentFloor, firstBasementStep];
};

export default fifteenOne;
