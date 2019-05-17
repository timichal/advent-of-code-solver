function fifteenFifteen(input) {
  const instructions = input
    .split("\n")
    .filter(line => line)
    .map(el => el.match(/-?\d/g));

  function getCombos(sum, len) {
    const combos = [];
    if (len === 1) return [sum];
    for (let curNum = 1; curNum < sum; curNum++) {
      getCombos(sum - curNum, len - 1).forEach((combo) => { combos.push([curNum].concat(combo)); });
    }
    return combos;
  }

  function bestScore(ingredients, caloriesGoal) {
    let maxScore = 0;

    getCombos(100, ingredients.length).forEach((ratio) => {
      const scoreParts = [0, 0, 0, 0, 0];
      for (let ingredient = 0; ingredient < ingredients.length; ingredient++) {
        for (let property = 0; property < scoreParts.length; property++) {
          scoreParts[property] += ingredients[ingredient][property] * ratio[ingredient];
        }
      }

      let score = Math.max(0, scoreParts[0])
        * Math.max(0, scoreParts[1])
        * Math.max(0, scoreParts[2])
        * Math.max(0, scoreParts[3]);

      if (caloriesGoal) score = scoreParts[4] === caloriesGoal ? score : 0;

      maxScore = Math.max(score, maxScore);
    });

    return maxScore;
  }

  const part1 = bestScore(instructions);
  const part2 = bestScore(instructions, 500);
  return [part1, part2];
}

export default fifteenFifteen;
