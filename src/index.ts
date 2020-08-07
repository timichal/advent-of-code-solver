/* eslint-disable no-param-reassign */
import { solutions } from "./solutions";
import { titles } from "./titles";

const sanitizeInput = (input: string) => input.split("\n").filter((line) => line);
const $ = (element: string) => <HTMLInputElement>document.querySelector(element);
const $$ = (element: string) => <NodeListOf<HTMLInputElement>>document.querySelectorAll(element);

const puzzleInfoChange = (clear = true) => {
  const year = $("input[name='year']:checked").value;
  const day = $("input[name='day']:checked").value;
  $$("input[name='day']").forEach((input) => {
    if (!solutions[Number(year)][Number(input.value)]) input.disabled = true;
  });
  const puzzleLink = `https://adventofcode.com/${year}/day/${Number(day)}`;
  const solutionLink = `https://github.com/timichal/advent-of-code-solver/blob/master/src/${year}/day_${day}.ts`;
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
$$("input[type='radio']").forEach((input) => input.addEventListener("click", () => puzzleInfoChange()));

$("#submit").addEventListener("click", () => {
  const year = Number($("input[name='year']:checked").value);
  const day = Number($("input[name='day']:checked").value);
  $$("input[name='day']").forEach((input) => {
    if (!solutions[year][Number(input.value)]) input.disabled = true;
  });
  const input = sanitizeInput($("#input").value);
  const [part1, part2] = solutions[year][day](input);
  $("#answer").innerHTML = `Part 1: ${part1} <br> Part 2: ${part2}`;
});
