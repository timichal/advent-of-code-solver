export const fifteenFifteen = (input) => {
  const instructions = input.map((el) => el.match(/-?\d/g));

  const getCombos = (sum, len) => {
    const combos = [];
    if (len === 1) return [sum];
    for (let curNum = 1; curNum < sum; curNum++) {
      getCombos(sum - curNum, len - 1).forEach((combo) => { combos.push([curNum].concat(combo)); });
    }
    return combos;
  };

  const product = (values) => values.reduce((acc, val) => acc * val, 1);

  const bestScore = (ingredients, caloriesGoal) => (
    Math.max(...getCombos(100, ingredients.length).map((ratio) => {
      const scores = [0, 0, 0, 0, 0];
      // readability wins over a map/reduce
      for (let ingredient = 0; ingredient < ingredients.length; ingredient++) {
        for (let property = 0; property < scores.length; property++) {
          scores[property] += ingredients[ingredient][property] * ratio[ingredient];
        }
      }
      if (caloriesGoal && scores[4] !== caloriesGoal) return 0;
      return scores.every((score) => score > 0) ? product(scores.slice(0, 4)) : 0;
    }))
  );
  const part1 = bestScore(instructions);
  const part2 = bestScore(instructions, 500);
  return [part1, part2];
};

export default fifteenFifteen;
