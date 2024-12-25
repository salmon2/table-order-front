import { css, DefaultTheme } from "styled-components";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  black3: "#333333",
  black9: "#999999",
  navy: "#192E78",
  navy75: "rgba(25, 46, 120, 0.75)",
  lightGray1: "#F7F7F7",
  borderGray: "#DDDDDD",
  gray1: "#DDDDDD",
  gray2: "#AAADBD",
  green: "#55DB44",
  blue1: "#C5D9F3",
  blue2: "#528DDD",
  blue3: "#367AD8",
  blue4: "#090979",
  pink1: "#DD528D",
  red: "#DB4455",
  orange: "#FF6347",
  yellow: "#FFE747",
  mataRed: "rgba(209, 80, 107, 1)",
  mataOrange: "rgba(255, 69, 0, 1)",
  mataYellow: "rgba(255, 255, 0, 1)",
  averageMap: {
    HIGH: "#17B3C6",
    MID: "#9BDEE6",
    LOW: "#D8F2F5",
    NONE: "#F9FDFD",
  },
};

const borderRadius = {
  ["3"]: css`
    border-radius: 3px;
  `,
  default: css`
    border-radius: 10px;
  `,
  defaultTop: css`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  defaultBottom: css`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `,
};

const gradient = {
  login: css`
    background: rgb(2, 0, 36);
    background: linear-gradient(
      148deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 52%,
      rgba(9, 13, 124, 1) 53%,
      rgba(0, 212, 255, 1) 100%
    );
  `,
  mataRed: css`
    background: linear-gradient(
      160deg,
      rgba(209, 80, 107, 0.3),
      rgba(224, 130, 151, 0.2),
      rgba(245, 194, 207, 0.2)
    ); /* 찐찐찐 -> 찐찐 -> 찐half */
  `,
  mataOrange: css`
    background: linear-gradient(
      160deg,
      rgba(255, 69, 0, 0.3),
      /* 진한 주황 */ rgba(255, 133, 94, 0.2),
      /* 중간 주황 */ rgba(255, 214, 204, 0.2) /* 연한 주황 */
    ); /* 찐찐찐 -> 찐찐 -> 찐half */
  `,
  mataYellow: css`
    background: linear-gradient(
      160deg,
      rgba(255, 255, 0, 0.3),
      /* 진한 노랑 */ rgba(255, 255, 102, 0.2),
      /* 중간 노랑 */ rgba(255, 255, 204, 0.2) /* 연한 노랑 */
    ); /* 찐찐찐 -> 찐찐 -> 찐half */
  `,
};

const boxShadow = {
  loginPanel: css`
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `,
  defaultLeft10: css`
    box-shadow: -10px 0px 20px rgba(0, 0, 0, 0.2);
  `,
  default: css`
    margin-top: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  `,
  Header: css`
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  `,
};

const gap = {
  ["10"]: "10px",
  defaultGap: "20px",
  PagelayoutGap: "30px",
  navGap: {
    default: "30px",
    response: "20px",
  },
  tableGap: {
    responsiveCol: "2px",
    defaultCol: "5px",
  },
  grid_wideGap: "50px",
};

const padding = {
  10: "10px",
  default: "20px",
  fieldset: "10px",
  rootLayoutResponsivePadding: "20px",
  rootLayoutPadding: "50px",
  navPadding: "30px",
};

const transition = {
  All100Ease: "all 100ms ease",
  All200Ease: "all 200ms ease",
  All300Ease: "all 300ms ease",
};

const flex = {
  CenterCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  row: {
    default: css`
      display: flex;
    `,
    AlignCenter: css`
      display: flex;
      align-items: center;
    `,
    AlignEnd: css`
      display: flex;
      align-items: end;
    `,
    StartCenter: css`
      display: flex;
      justify-content: start;
      align-items: center;
    `,
    EndCenter: css`
      display: flex;
      justify-content: end;
      align-items: center;
    `,
  },
  column: {
    default: css`
      display: flex;
      flex-direction: column;
    `,
  },
};

const height = {
  navLi: "20px",
  PageHeaderHeight: "80px",
  TableHeight: "50px",
};

const fontSize = {
  default: "1rem", // 16px;
  ["050rem"]: "0.50rem", // 8px;
  ["075rem"]: "0.75rem", // 12px;
  ["1125rem"]: "1.125rem", // 18px;
  ["125rem"]: "1.25rem", // 20px;
  ["150rem"]: "1.50rem", // 24px;
  ["175rem"]: "1.75rem", // 28px;
  ["200rem"]: "2rem", // 32px;
  ["225rem"]: "2.25rem", // 36px;
};
const fontSizeCss = {
  default: css`
    font-size: 1rem; // // 16px;
  `,
  ["050rem"]: css`
    font-size: 0.5rem; // 8px
  `,
  ["075rem"]: css`
    font-size: 0.75rem; // 12px
  `,
  ["0825rem"]: css`
    font-size: 0.825rem; // 14px
  `,
  ["1125rem"]: css`
    font-size: 1.125rem; // 18px
  `,
  ["125rem"]: css`
    font-size: 1.25rem; // 20px
  `,
  ["150rem"]: css`
    font-size: 1.5rem; // 24px
  `,
  ["175rem"]: css`
    font-size: 1.75rem; // 28px
  `,
  ["200rem"]: css`
    font-size: 2rem; // 32px
  `,
  ["225rem"]: css`
    font-size: 2.25rem; // 36px
  `,
};

const fontFamily = {
  ["Pre_300"]: css`
    font-family: "Pretendard";
    font-weight: 300;
  `,
  ["Pre_400"]: css`
    font-family: "Pretendard";
    font-weight: 400;
  `,
  ["Pre_700"]: css`
    font-family: "Pretendard";
    font-weight: 700;
  `,
  ["Pre_800"]: css`
    font-family: "Pretendard";
    font-weight: 800;
  `,

  ["Poppins_100"]: css`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: normal;
  `,
  ["Poppins_200"]: css`
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
  `,
  ["Poppins_300"]: css`
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
  `,
  ["Poppins_800"]: css`
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: normal;
  `,
};

const buttonSize = {
  sm: css`
    width: 100px;
    height: 30px;
    padding: 0 10px;
    font-size: 1rem;
  `,
  md: css`
    width: 200px;
    height: 47px;
    padding: 0 10px;
  `,
  lg: css`
    width: 200px;
    height: 80px;
    padding: 0 10px;
  `,
};

const buttonVariant = {
  icon: css`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `,
};

export type ColorType = typeof colors;
export type GapType = typeof gap;
export type FontSizeType = typeof fontSize;
export type FontSizeType2 = typeof fontSizeCss;
export type PaddingType = typeof padding;
export type TransitionType = typeof transition;
export type FlexType = typeof flex;
export type FontFamilyType = typeof fontFamily;
export type HeightType = typeof height;
export type ButtonSizeType = typeof buttonSize;
export type GradientType = typeof gradient;
export type BoxShadowType = typeof boxShadow;
export type BorderRadiusType = typeof borderRadius;
export type ButtonVariantType = typeof buttonVariant;

export type FontSizeTypeKeyType = keyof FontSizeType;

export const theme: DefaultTheme = {
  colors,
  gap,
  fontSize,
  fontSizeCss,
  padding,
  transition,
  flex,
  fontFamily,
  height,
  buttonSize,
  gradient,
  boxShadow,
  borderRadius,
  buttonVariant,
};
