const fifteenFive = (input: string[]): [number, number] => {
  const isStringNicePartOne = (string: string) => {
    // All of:
    // It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    const vowelsCount = string.match(/([aeiou])/g)?.length ?? 0;
    if (vowelsCount < 3) return false;

    // It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    if (!string.match(/(.)\1/g)) return false;

    // It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
    if (string.match(/ab|cd|pq|xy/g)) return false;

    return true;
  };

  const isStringNicePartTwo = (string: string) => {
    // All of:
    // It contains a pair of any two letters that appears at least twice in the string without overlapping,
    //  like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    if (!string.match(/([a-z][a-z]).*\1/g)) return false;

    // It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
    if (!string.match(/([a-z]).\1/g)) return false;

    return true;
  };

  const partOne = input.reduce((count, string) => count + +isStringNicePartOne(string), 0);
  const partTwo = input.reduce((count, string) => count + +isStringNicePartTwo(string), 0);
  return [partOne, partTwo];
};

export default fifteenFive;
