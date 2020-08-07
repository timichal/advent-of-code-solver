export const fifteenFive = (input: string[]): [number, number] => {
  const isStringNicePartOne = (string: string) => {
    // All of:
    // It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    const vowelsCount = string.match(/([aeiou])/g)?.length;
    const containsThreeVowels = vowelsCount && vowelsCount >= 3;

    // It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    const containsLetterTwice = string.match(/(.)\1/g);

    // It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
    const containsNoForbiddenStrings = !string.match(/ab|cd|pq|xy/g);

    if (containsThreeVowels && containsLetterTwice && containsNoForbiddenStrings) return 1;
    return 0;
  };

  const isStringNicePartTwo = (string: string) => {
    // All of:
    // It contains a pair of any two letters that appears at least twice in the string without overlapping,
    //  like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    const containsPairTwice = string.match(/([a-z][a-z]).*\1/g);

    // It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
    const containsRepeatingLetter = string.match(/([a-z]).\1/g);

    if (containsPairTwice && containsRepeatingLetter) return 1;
    return 0;
  };

  const partOne = input.reduce((count, string) => count + isStringNicePartOne(string), 0);
  const partTwo = input.reduce((count, string) => count + isStringNicePartTwo(string), 0);
  return [partOne, partTwo];
};

export default fifteenFive;
