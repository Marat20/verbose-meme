import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

// TODO дополнить сторис
export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      disabled: false,
      content: <div>Hello</div>,
      onClick: action('Drop'),
    },
    {
      disabled: false,
      content: <div>Hello</div>,
      onClick: action('Drop'),
    },
    {
      disabled: false,
      content: <div>Hello</div>,
      onClick: action('Drop'),
    },
    {
      disabled: false,
      content: <div>Hello</div>,
      onClick: action('Drop'),
    },
    {
      disabled: false,
      content: <div>Hello</div>,
      onClick: action('Drop'),
    },
  ],
};
