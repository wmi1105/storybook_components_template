import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "./Button";
import { BUTTON_THEME } from "./types";

export default {
  title: `components/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      count : {count}
      <div>
        <Button {...args} onClick={onClickHandler} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: BUTTON_THEME.DEFAULT,
  label: "Button",
};
