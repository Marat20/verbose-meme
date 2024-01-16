import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { Drawer } from './Drawer';

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
