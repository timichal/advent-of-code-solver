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
import fifteenEleven from "./2015/day_11";
import fifteenTwelve from "./2015/day_12";
import fifteenThirteen from "./2015/day_13";
import fifteenFourteen from "./2015/day_14";
import fifteenFifteen from "./2015/day_15";
import fifteenSixteen from "./2015/day_16";
import fifteenSeventeen from "./2015/day_17";
import fifteenEighteen from "./2015/day_18";
import fifteenNineteen from "./2015/day_19";
import fifteenTwenty from "./2015/day_20";
import fifteenTwentyOne from "./2015/day_21";
import fifteenTwentyTwo from "./2015/day_22";
import fifteenTwentyThree from "./2015/day_23";
import fifteenTwentyFour from "./2015/day_24";
import fifteenTwentyFive from "./2015/day_25";
import sixteenOne from "./2016/day_01";
import sixteenTwo from "./2016/day_02";
import sixteenThree from "./2016/day_03";
import sixteenFour from "./2016/day_04";
import sixteenFive from "./2016/day_05";
import sixteenSix from "./2016/day_06";
import seventeenOne from "./2017/day_01";

export const solutions: {
  [year: number]: { [day: number]: (input: string[]) => [number | string, number | string] }
} = {
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
    21: fifteenTwentyOne,
    22: fifteenTwentyTwo,
    23: fifteenTwentyThree,
    24: fifteenTwentyFour,
    25: fifteenTwentyFive,
  },
  2016: {
    1: sixteenOne,
    2: sixteenTwo,
    3: sixteenThree,
    4: sixteenFour,
    5: sixteenFive,
    6: sixteenSix,
    /*
    7: sixteenSeven,
    */
  },
  2017: {
    1: seventeenOne,
  },
  /*
  2018: {
    1: eighteenOne,
  },
  2019: {
    1: nineteenOne,
  },
  2020: {
    1: twentyOne,
  },
  */
};

export default solutions;
