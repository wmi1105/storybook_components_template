import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestPage } from './TestPage';

export default {
  title: `testPage`,
  component: TestPage,
} as ComponentMeta<typeof TestPage>;

const Template: ComponentStory<typeof TestPage> = (args) => <TestPage />

export const Default = Template.bind({})
Default.args ={}

