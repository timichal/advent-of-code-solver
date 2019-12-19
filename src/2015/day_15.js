export const fifteenFifteen = (input) => {
  const instructions = input
    .split("\n")
    .filter((line) => line)
    .map((el) => el.match(/-?\d/g));

  const getCombos = (sum, len) => {
    const combos = [];
    if (len === 1) return [sum];
    for (let curNum = 1; curNum < sum; curNum++) {
      getCombos(sum - curNum, len - 1).forEach((combo) => { combos.push([curNum].concat(combo)); });
    }
    return combos;
  };

  const bestScore = (ingredients, caloriesGoal) => (
    Math.max(...getCombos(100, ingredients.length).map((ratio) => {
      const scoreParts = [0, 0, 0, 0, 0];
      for (let ingredient = 0; ingredient < ingredients.length; ingredient++) {
        for (let property = 0; property < scoreParts.length; property++) {
          scoreParts[property] += ingredients[ingredient][property] * ratio[ingredient];
        }
      }

      if (caloriesGoal && scoreParts[4] !== caloriesGoal) return 0;
      return Math.max(0, scoreParts[0])
        * Math.max(0, scoreParts[1])
        * Math.max(0, scoreParts[2])
        * Math.max(0, scoreParts[3]);
    }))
  );

  const part1 = bestScore(instructions);
  const part2 = bestScore(instructions, 500);
  return [part1, part2];
};

export default fifteenFifteen;
