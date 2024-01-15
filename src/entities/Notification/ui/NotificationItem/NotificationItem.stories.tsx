import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
