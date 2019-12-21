export const fifteenTwelve = (input) => {
  const countArr = (arr) => {
    // if an actual object and contains "red", discount it (count as 0)
    if (!Array.isArray(arr) && Object.values(arr).includes("red")) return 0;
    // else coerce to array and count the numbers, go a level deeper if object/array
    return Object.values(arr).reduce((count, el) => {
      if (typeof el === "number") return count + el;
      if (typeof el === "object") return count + countArr(el);
      return count;
    }, 0);
  };

  const part1 = input[0]
    .match(/-?\d+/g)
    .reduce((acc, val) => acc + Number(val), 0);

  const part2 = countArr(JSON.parse(input[0]));

  return [part1, part2];
};

export default fifteenTwelve;
