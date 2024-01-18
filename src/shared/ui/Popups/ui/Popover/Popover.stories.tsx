import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { Popover } from './Popover';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
