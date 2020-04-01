import { combination } from "js-combinatorics";

export const fifteenTwentyOne = (input) => {
  const [bossMaxHp, bossDamage, bossArmor] = input.map((line) => line.split(": ")[1]);

  const store = {
    weapons: [[8, 4, 0], [10, 5, 0], [25, 6, 0], [40, 7, 0], [74, 8, 0]],
    armor: [[13, 0, 1], [31, 0, 2], [53, 0, 3], [75, 0, 4], [102, 0, 5]],
    rings: [[25, 1, 0], [50, 2, 0], [100, 3, 0], [20, 0, 1], [40, 0, 2], [80, 0, 3]],
  };
  const ringPairs = combination(store.rings, 2);

  // 1 weapon, 0-1 armor, 0-2 rings (unique)
  const options = [
    [store.weapons], // 100
    store.weapons.map((weapon) => store.rings.map((ring) => [weapon, ring])).flat(), // 101
    store.weapons.map((weapon) => store.armor.map((piece) => [weapon, piece])).flat(), // 110
    store.weapons.map((weapon) => store.armor.map((piece) => store.rings.map((ring) => [weapon, piece, ring]))).flat(2), // 111
    store.weapons.map((weapon) => ringPairs.map((ringPair) => [weapon, ...ringPair])).flat(), // 102
    store.weapons.map((weapon) => store.armor.map((piece) => ringPairs.map((ringPair) => [weapon, piece, ...ringPair]))).flat(2), // 112
  ].flat();

  const mapSum = (arr, pos) => arr.map((el) => el[pos]).reduce((acc, val) => acc + val);

  const simulation = (setup) => {
    let playerHp = 100;
    let bossHp = bossMaxHp;
    const [cost, playerDamage, playerArmor] = [mapSum(setup, 0), mapSum(setup, 1), mapSum(setup, 2)];
    let playerTurn = true;
    while (playerHp > 0 && bossHp > 0) {
      if (playerTurn) bossHp -= Math.max(playerDamage - bossArmor, 1);
      else playerHp -= Math.max(bossDamage - playerArmor, 1);
      playerTurn = !playerTurn;
    }
    if (playerHp <= 0) return [Infinity, cost];
    return [cost, -Infinity];
  };

  const [part1, part2] = options
    .map(simulation)
    .reduce(
      (peak, current) => [Math.min(peak[0], current[0]), Math.max(peak[1], current[1])],
      [Infinity, -Infinity],
    );
  return [part1, part2];
};

export default fifteenTwentyOne;
