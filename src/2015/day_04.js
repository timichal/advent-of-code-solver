import md5 from "js-md5";

export const fifteenFour = (input) => {
  const getSuffix = (hash, zeroes) => {
    let suffix = 1;
    for (;;) {
      if (md5(hash + suffix).startsWith("".padStart(zeroes, "0"))) return suffix;
      suffix += 1;
    }
  };

  return [getSuffix(input, 5), getSuffix(input, 6)];
};

export default fifteenFour;
