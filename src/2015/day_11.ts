export const fifteenEleven = (input: string[]): [string, string] => {
  const originalPassword = input[0];

  const nextChar = (str: string) => {
    let depth = 1;
    while (str[str.length - depth] === "z") depth += 1;

    return str.substring(0, str.length - depth)
      + String.fromCharCode(str.charCodeAt(str.length - depth) + 1)
      + "a".repeat(depth - 1);
  };

  const passwordRequirements = (string: string) => {
    // All of:
    // Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz.
    //  They cannot skip letters; abd doesn't count.
    const containsIncreasing = () => {
      for (let charCode = 97; charCode <= 120; charCode += 1) {
        if (string.includes(
          String.fromCharCode(charCode)
          + String.fromCharCode(charCode + 1)
          + String.fromCharCode(charCode + 2),
        )) return true;
      }
      return false;
    };

    // Passwords may not contain the letters i, o, or l, as these letters can be mistaken for other characters and are therefore confusing.
    const containsNoForbiddenLetters = !/[iol]/g.test(string);

    // Passwords must contain at least two different, non-overlapping pairs of letters, like aa, bb, or zz.
    const containsTwoDifferentPairs = new Set(string.match(/([a-z])\1/g)).size >= 2;

    return containsIncreasing() && containsNoForbiddenLetters && containsTwoDifferentPairs;
  };

  function getNextPassword(password: string) {
    password = nextChar(password);
    while (!passwordRequirements(password)) password = nextChar(password);
    return password;
  }

  const partOne = getNextPassword(originalPassword);
  const partTwo = getNextPassword(partOne);
  return [partOne, partTwo];
};

export default fifteenEleven;
