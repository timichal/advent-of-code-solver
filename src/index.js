import fifteenOne from "./2015/day_01";
import fifteenTwo from "./2015/day_02";
import fifteenThree from "./2015/day_03";
import fifteenFour from "./2015/day_04";
import fifteenFive from "./2015/day_05";
import fifteenSix from "./2015/day_06";
import fifteenSeven from "./2015/day_07";
import fifteenEight from "./2015/day_08";
import fifteenNine from "./2015/day_09";
import fifteenTen from "./2015/day_10";

const solutions = {
  2015: {
    1: fifteenOne,
    2: fifteenTwo,
    3: fifteenThree,
    4: fifteenFour,
    5: fifteenFive,
    6: fifteenSix,
    7: fifteenSeven,
    8: fifteenEight,
    9: fifteenNine,
    10: fifteenTen,
  },
};

document.getElementById("submit").addEventListener("click", () => {
  const year = document.querySelector("input[name='year']:checked").value;
  const day = document.querySelector("input[name='day']:checked").value;
  const input = document.getElementById("input").value;
  const [part1, part2] = solutions[year][parseInt(day, 10)] ? solutions[year][parseInt(day, 10)](input) : ["Not available!", "Not available!"];
  document.getElementById("answer").innerHTML = `Part 1: ${part1} <br> Part 2: ${part2}`;
});
