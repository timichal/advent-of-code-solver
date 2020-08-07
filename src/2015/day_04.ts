import { md5 } from "../md5";

export const fifteenFour = (input: string[]): [number, number] => {
  const instructions = input[0];
  const getSuffix = (hash: string, prefix: string) => {
    let suffix = 1;
    for (;;) {
      if (md5(hash + suffix).startsWith(prefix)) return suffix;
      suffix += 1;
    }
  };
  return [getSuffix(instructions, "00000"), getSuffix(instructions, "000000")];
};

export default fifteenFour;
