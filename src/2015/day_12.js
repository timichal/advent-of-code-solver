function fifteenTwelve(input) {
  function countArr(arr) {
    let count = 0;

    // if an actual object and contains "red", discount it (count as 0)
    if (!Array.isArray(arr) && Object.values(arr).includes("red")) return count;

    // else coerce to array
    arr = Object.values(arr);

    // count the numbers, go a level deeper if object/array
    arr.forEach((el) => {
      if (typeof el === "number") count += el;
      else if (typeof el === "object") count += countArr(el);
    });

    return count;
  }


  const part1 = input
    .trim()
    .match(/-?\d+/g)
    .reduce((acc, val) => acc + Number(val), 0);

  const part2 = countArr(JSON.parse(input));

  return [part1, part2];
}

export default fifteenTwelve;
