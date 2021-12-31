import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PopModal } from "./PopModal";

export default {
  title: `Components/Popup`,
  component: PopModal,
} as ComponentMeta<typeof PopModal>;

const Template: ComponentStory<typeof PopModal> = (args) => <PopModal />;

export const Modal = Template.bind({});
Modal.args = {};
