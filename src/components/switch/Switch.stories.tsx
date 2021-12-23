import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./Switch";
import { SWITCH_ACTIVE_COLOR, SWITCH_SIZE } from "./types";

export default {
  title: `Components/Switch`,
  component: Switch,
  argTypes: {
    color: {
      options: SWITCH_ACTIVE_COLOR,
      defaultValue: SWITCH_ACTIVE_COLOR.BLUE,
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDisabled: false,
  isChecked: false,
  onSwitch: (val: boolean) => false,
};

export const Checked = Template.bind({});
Checked.args = {
  size: SWITCH_SIZE.W50,
  isDisabled: false,
  isChecked: true,
  onSwitch: (val: boolean) => false,
};

const SampleTemplate: ComponentStory<typeof Switch> = (args) => {
  const [value, setValue] = useState(false);

  const onSwitchHandler = (val: boolean) => {
    setValue(val);
  };

  return <Switch {...args} isChecked={value} onSwitch={onSwitchHandler} />;
};
export const Sample = SampleTemplate.bind({});
Sample.args = {
  id: "switchId",
  size: SWITCH_SIZE.W80,
};
