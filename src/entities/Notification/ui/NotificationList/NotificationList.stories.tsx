import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { NotificationList } from './NotificationList';

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationList>;

const Template: StoryFn<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
