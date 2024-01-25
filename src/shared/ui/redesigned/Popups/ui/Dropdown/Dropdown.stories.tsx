import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

const items = [
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
];

// TODO дополнить сторис
export const Primary = Template.bind({});
Primary.args = { items, trigger: <div>Open</div> };
