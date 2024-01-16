import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { NotificationButton } from './NotificationButton';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationButton>;

const Template: StoryFn<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
