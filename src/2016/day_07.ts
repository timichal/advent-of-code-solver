export const sixteenSeven = (input: string[]): [number, number] => {
  const part1 = input
    .filter((line) => !line.match(/\[[a-z]*?([a-z])([a-z])\2\1[a-z]*?\]/g))
    .filter((line) => line.match(/([a-z])([a-z])\2\1/g))
    .filter((line) => !line.match(/([a-z])\1\1\1/g)) // filter "aaaa"
    .length;

  const part2 = input
    .filter((line) => [...line.matchAll(/(?=(([a-z])[a-z]\1))/g)] //todo lookahead/overlap
      .map((find) => {
        console.log(find)
        const reverseFind = `${find[0][1]}${find[0][0]}${find[0][1]}`;
        return line.match(new RegExp(`\\[.*?${reverseFind}.*?\\]`, "g")) && true;
      })
      .includes(true));

  // part 2: we pick every xyx combination
  console.log(part1, part2)
  return [part1, 0];
};

/*
pt2: 
* vzít každej znak-cokoliv-znak mimo závorku 
* obrátit na cokoliv-znak-cokoliv
* najít v závorce
*/

export default sixteenSeven;
//\[[a-z]*?([a-z])([a-z])\2\1.*?\]
