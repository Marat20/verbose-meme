import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

// TODO заполнить сторис
export const Primary = Template.bind({});
Primary.args = {};
