export const fifteenFive = (input) => {
  const isStringNicePartOne = (string) => {
    // All of:
    // It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    const containsThreeVowels = string.match(/([aeiou])/g) ? string.match(/([aeiou])/g).length >= 3 : false;

    // It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    const containsLetterTwice = string.match(/(.)\1/g);

    // It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
    const containsNoForbiddenStrings = !string.match(/ab|cd|pq|xy/g);

    return containsThreeVowels && containsLetterTwice && containsNoForbiddenStrings;
  };

  const isStringNicePartTwo = (string) => {
    // All of:
    // It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    const containsPairTwice = string.match(/([a-z][a-z]).*\1/g);

    // It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
    const containsRepeatingLetter = string.match(/([a-z]).\1/g);

    return containsPairTwice && containsRepeatingLetter && true;
  };

  const partOne = input
    .split("\n")
    .reduce((acc, string) => acc + isStringNicePartOne(string), 0);

  const partTwo = input
    .split("\n")
    .reduce((acc, string) => acc + isStringNicePartTwo(string), 0);

  return [partOne, partTwo];
};

export default fifteenFive;
