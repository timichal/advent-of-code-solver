import { solutions } from "./solutions";
import { titles } from "./titles";

const $ = (element) => (document.querySelectorAll(element).length === 1
  ? document.querySelector(element)
  : document.querySelectorAll(element));

const puzzleInfoChange = (clear = true) => {
  const year = $("input[name='year']:checked").value;
  const day = $("input[name='day']:checked").value;
  const solutionLink = `https://github.com/timichal/advent-of-code-solver/blob/master/src/${year}/day_${day}.js`;
  $("#puzzle-info").innerHTML = `
    <a href="https://adventofcode.com/${year}/day/${Number(day)}" target="_blank">
      ${year}, Day ${day}: ${titles[Number(year)][Number(day)]}
    </a><br>
    <a href=${solutionLink} class="solution-link" target="__blank">View solution on GitHub</a>
  `;
  if (clear) $("textarea").value = "";
};

window.onload = () => puzzleInfoChange(false);
$("input[type='radio']").forEach((input) => input.addEventListener("click", puzzleInfoChange));

$("#submit").addEventListener("click", () => {
  const year = $("input[name='year']:checked").value;
  const day = $("input[name='day']:checked").value;
  const input = $("#input").value;
  const [part1, part2] = solutions[year][Number(day)] ? solutions[year][Number(day)](input) : ["Not available!", "Not available!"];
  $("#answer").innerHTML = `Part 1: ${part1} <br> Part 2: ${part2}`;
});
