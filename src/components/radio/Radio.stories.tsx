import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Radio } from "./Radio";

const sampleItems = [
  { value: "radio1", label: "radio1" },
  { value: "radio2", label: "radio2" },
  { value: "radio3", label: "radio3" },
];

export default {
  title: `Components/Radio`,
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "radio",
  items: [{ value: "radio1", label: "radio1" }],
  checkValue: "radio",
  onChange: (id, value) => console.log(id, value),
};

export const Checked = Template.bind({});
Checked.args = {
  id: "radio",
  items: [{ value: "radio1", label: "radio1" }],
  checkValue: "radio1",
  onChange: (id, value) => console.log(id, value),
};

export const Sample = () => {
  const [radioValue, setRadioValue] = useState("radio1");

  const onRadioChange = (id: string, value: string) => {
    setRadioValue(value);
  };

  return (
    <Radio
      id="sampleRadio"
      items={sampleItems}
      checkValue={radioValue}
      onChange={onRadioChange}
    />
  );
};
