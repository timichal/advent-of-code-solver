import { sum } from "../helperFunctions";

export const fifteenTwo = (input: string[]): [number, number] => {
  const boxDimensions = input.map((box) => box.split("x").map(Number));

  const computeWrappingPaper = ([l, w, h]: number[]) => (
    2 * l * w
    + 2 * h * l
    + 2 * w * h
    + Math.min(l * w, w * h, h * l)
  );
  const computeRibbon = ([l, w, h]: number[]) => 2 * Math.min(l + w, w + h, h + l) + (l * w * h);

  const wrappingPaperTotal = sum(boxDimensions.map((box) => computeWrappingPaper(box)));
  const ribbonTotal = sum(boxDimensions.map((box) => computeRibbon(box)));
  return [wrappingPaperTotal, ribbonTotal];
};

export default fifteenTwo;
