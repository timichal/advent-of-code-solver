export const fifteenTwentyTwo = (input) => {
  const [bossMaxHp, bossDamage] = input
    .split("\n")
    .map((line) => line.split(": ")[1]);

  const spells = [
    { name: "missile", cost: 53, cooldown: 0 },
    { name: "drain", cost: 73, cooldown: 0 },
    { name: "shield", cost: 113, cooldown: 6 },
    { name: "poison", cost: 173, cooldown: 6 },
    { name: "recharge", cost: 229, cooldown: 5 },
  ];

  const gameState = {
    manacost: 0,
    playerHp: 50,
    playerMana: 500,
    bossHp: bossMaxHp,
    bossDamage,
    playerTurn: true,
    effects: {
      shield: 0,
      poison: 0,
      recharge: 0,
    },
    minMana: Infinity,
  };

  const simulation = (spell, { effects, ...inputState }, part2) => {
    const state = { effects: { ...effects }, ...inputState };
    if (spell) {
      // PLAYER TURN
      // mana check
      state.playerMana -= spell.cost;
      if (state.playerMana < 0) return Infinity;

      // part 2: player losing HP each player turn
      if (part2) {
        state.playerHp -= 1;
        if (state.playerHp <= 0) return Infinity;
      }

      // apply effects
      if (state.effects.shield) {
        state.effects.shield -= 1;
        if (state.effects.shield && spell.name === "shield") return Infinity;
      }
      if (state.effects.poison) {
        state.bossHp -= 3;
        if (state.bossHp <= 0) return state.manacost;
        state.effects.poison -= 1;
        if (state.effects.poison && spell.name === "poison") return Infinity;
      }
      if (state.effects.recharge) {
        state.playerMana += 101;
        state.effects.recharge -= 1;
        if (state.effects.recharge && spell.name === "recharge") return Infinity;
      }

      // cast a spell, end if more mana spent than in a previous case
      state.manacost += spell.cost;
      if (state.manacost > state.minMana) return Infinity;
      if (spell.name === "missile") { state.bossHp -= 4; }
      if (spell.name === "drain") { state.bossHp -= 2; state.playerHp += 2; }
      if (spell.name === "shield") { state.effects.shield = spell.cooldown; }
      if (spell.name === "poison") { state.effects.poison = spell.cooldown; }
      if (spell.name === "recharge") { state.effects.recharge = spell.cooldown; }

      if (state.bossHp <= 0) return state.manacost;

      // BOSS TURN
      // apply effects
      let armor = 0;
      if (state.effects.shield) {
        armor = 7;
        state.effects.shield -= 1;
      }
      if (state.effects.poison) {
        state.bossHp -= 3;
        if (state.bossHp <= 0) return state.manacost;
        state.effects.poison -= 1;
      }
      if (state.effects.recharge) {
        state.playerMana += 101;
        state.effects.recharge -= 1;
      }

      // the boss attacks
      state.playerHp -= Math.max(state.bossDamage - armor, 1);

      if (state.playerHp <= 0) return Infinity;
    }

    // round complete, picking next spell
    spells.forEach((_, idx) => {
      state.minMana = Math.min(state.minMana, simulation(spells[idx], state, part2));
    });

    return state.minMana;
  };

  return [simulation(undefined, gameState), simulation(undefined, gameState, true)];
};

export default fifteenTwentyTwo;
