import { fifteenOne } from "./2015/day_01";
import { fifteenTwo } from "./2015/day_02";
import { fifteenThree } from "./2015/day_03";
import { fifteenFour } from "./2015/day_04";
import { fifteenFive } from "./2015/day_05";
import { fifteenSix } from "./2015/day_06";
import { fifteenSeven } from "./2015/day_07";
import { fifteenEight } from "./2015/day_08";
import { fifteenNine } from "./2015/day_09";
import { fifteenTen } from "./2015/day_10";
import { fifteenEleven } from "./2015/day_11";
import { fifteenTwelve } from "./2015/day_12";
import { fifteenThirteen } from "./2015/day_13";
import { fifteenFourteen } from "./2015/day_14";
import { fifteenFifteen } from "./2015/day_15";
import { fifteenSixteen } from "./2015/day_16";
import { fifteenSeventeen } from "./2015/day_17";
import { fifteenEighteen } from "./2015/day_18";
import { fifteenNineteen } from "./2015/day_19";
import { fifteenTwenty } from "./2015/day_20";

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
    11: fifteenEleven,
    12: fifteenTwelve,
    13: fifteenThirteen,
    14: fifteenFourteen,
    15: fifteenFifteen,
    16: fifteenSixteen,
    17: fifteenSeventeen,
    18: fifteenEighteen,
    19: fifteenNineteen,
    20: fifteenTwenty,
  },
};

const $ = (element) => (document.querySelectorAll(element).length === 1
  ? document.querySelector(element)
  : document.querySelectorAll(element));

const puzzleInfoChange = (clear = true) => {
  const year = $("input[name='year']:checked").value;
  const day = $("input[name='day']:checked").value;
  $("#puzzle-info").innerHTML = `
    <a href="https://adventofcode.com/${year}/day/${Number(day)}" target="_blank">
      ${year} day ${day}
    </a>
  `;
  if (clear) $("textarea").value = "";
};

window.onload = () => puzzleInfoChange(false);
$("input[type='radio']").forEach((input) => input.addEventListener("click", puzzleInfoChange));

$("#submit").addEventListener("click", () => {
  const year = $("input[name='year']:checked").value;
  const day = $("input[name='day']:checked").value;
  const input = $("#input").value;
  const [part1, part2] = solutions[year][parseInt(day, 10)] ? solutions[year][parseInt(day, 10)](input) : ["Not available!", "Not available!"];
  $("#answer").innerHTML = `Part 1: ${part1} <br> Part 2: ${part2}`;
});
