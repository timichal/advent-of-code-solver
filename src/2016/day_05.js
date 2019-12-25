import md5 from "../md5";

export function sixteenFive(input) {
  const instructions = input[0];
  const getPasswords = (id, prefix) => {
    let suffix = 0;
    const part1 = [];
    const part2 = Array(8).fill("_");
    while (part2.includes("_")) {
      const hash = md5(id + suffix);
      if (hash.startsWith(prefix)) {
        if (part1.length < 8) part1.push(hash[5]);
        if (hash[5] <= 7 && part2[hash[5]] === "_") part2[hash[5]] = hash[6];
      }
      suffix += 1;
    }
    return [part1.join(""), part2.join("")];
  };

  return getPasswords(instructions, "00000");
}

export default sixteenFive;
