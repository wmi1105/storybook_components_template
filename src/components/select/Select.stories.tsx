import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";

const samapleData = [
  {
    value: "option1",
    text: "항목1",
  },
  {
    value: "option2",
    text: "항목2",
  },
  {
    value: "option3",
    text: "항목3",
  },
  {
    value: "option4",
    text: "항목4",
  },
  {
    value: "option5",
    text: "항목5",
  },
];

export default {
  title: `components/Select`,
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState(0);

  const selectChangeHandler = (idx: number) => {
    setValue(idx);
  };

  return <Select {...args} selected={value} onChange={selectChangeHandler} />;
};

export const Default = Template.bind({});
Default.args = {
  optionData: samapleData,
};
