export const fifteenThree = (input: string[]): [number, number] => {
  const instructions = [...input[0]];

  // a reducer that creates a new array each pass would be almost a thousand times slower!
  const countVisitedLocations = (santas: number) => {
    const locations = Array(instructions.length).fill([0, 0]);
    instructions.forEach((instruction, index) => {
      const [lastX, lastY] = locations[index - santas] || [0, 0];
      if (instruction === "^") locations[index] = [lastX + 1, lastY];
      if (instruction === "v") locations[index] = [lastX - 1, lastY];
      if (instruction === ">") locations[index] = [lastX, lastY + 1];
      if (instruction === "<") locations[index] = [lastX, lastY - 1];
    });
    return new Set(locations.map((location) => JSON.stringify(location))).size;
  };
  return [countVisitedLocations(1), countVisitedLocations(2)];
};

export default fifteenThree;
