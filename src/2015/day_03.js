export const fifteenThree = (input) => {
  const instructions = [...input[0]];

  // a reducer that creates a new array each pass would be almost a thousand times slower!
  const visitedLocs = (santas) => {
    const locations = Array(instructions.length).fill([0, 0]);
    instructions.forEach((instruction, index) => {
      const [lastX, lastY] = locations[index - santas] || [0, 0];
      if (instruction === "^") locations[index] = [lastX + 1, lastY];
      if (instruction === "v") locations[index] = [lastX - 1, lastY];
      if (instruction === ">") locations[index] = [lastX, lastY + 1];
      if (instruction === "<") locations[index] = [lastX, lastY - 1];
    });
    return new Set(locations.map(JSON.stringify)).size;
  };
  return [visitedLocs(1), visitedLocs(2)];
};

export default fifteenThree;
