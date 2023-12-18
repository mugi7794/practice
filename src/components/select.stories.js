import SSSelect from "./select";

export default {
  component: SSSelect,
  title: "SSSelect",
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    // arguments 인자
    label: "primary",
    variant: "primary",
    data: ["나는요", "오빠가", "좋은걸"],
  },
};

export const Secondary = {
  args: {
    label: "secondary",
    variant: "secondary",
    data: ["나는요", "오빠가", "좋은걸"],
  },
};

// (2) * args
// https://storybook.js.org/docs/writing-stories/args

// `variant의 value에 따라 다양한 컴포넌트를 생성하기 위해 필수적인 요소`
// `args를 통해 <Button> 컴포넌트를 활용하여 primary-button과 secondary-button 생성 가능`
