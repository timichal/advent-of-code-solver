import md5 from "js-md5";

export const fifteenFour = (input) => {
  const instructions = input[0];
  const getSuffix = (hash, prefix) => {
    let suffix = 1;
    for (;;) {
      if (md5(hash + suffix).startsWith(prefix)) return suffix;
      suffix += 1;
    }
  };

  return [getSuffix(instructions, "00000"), getSuffix(instructions, "000000")];
};

export default fifteenFour;
