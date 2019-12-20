import { solutions } from "./solutions";
import { titles } from "./titles";

const sanitizeInput = (input) => input.split("\n").filter((line) => line);

const $ = (element) => (document.querySelectorAll(element).length === 1
  ? document.querySelector(element)
  : document.querySelectorAll(element));

const puzzleInfoChange = (clear = true) => {
  const year = $("input[name='year']:checked").value;
  const day = $("input[name='day']:checked").value;
  const puzzleLink = `https://adventofcode.com/${year}/day/${Number(day)}`;
  const solutionLink = `https://github.com/timichal/advent-of-code-solver/blob/master/src/${year}/day_${day}.js`;
  const inputLink = `https://adventofcode.com/${year}/day/${Number(day)}/input`;
  $("#puzzle-info").innerHTML = `
    <a href=${puzzleLink} target="_blank">
      ${year}, Day ${day}: ${titles[Number(year)][Number(day)]}
    </a><br>
    <span class="link-line">
    <a href=${inputLink} target="__blank">Open puzzle input (AoC login required)</a>
    •
    <a href=${solutionLink} target="__blank">View solution on GitHub</a>
    </span>
  `;
  if (clear) {
    $("textarea").value = "";
    $("#answer").innerHTML = "Part 1:<br> Part 2:";
  }
};

window.onload = () => puzzleInfoChange(false);
$("input[type='radio']").forEach((input) => input.addEventListener("click", puzzleInfoChange));

$("#submit").addEventListener("click", () => {
  const year = $("input[name='year']:checked").value;
  const day = $("input[name='day']:checked").value;
  const input = sanitizeInput($("#input").value);
  const [part1, part2] = solutions[year][Number(day)] ? solutions[year][Number(day)](input) : ["Not available!", "Not available!"];
  $("#answer").innerHTML = `Part 1: ${part1} <br> Part 2: ${part2}`;
});
