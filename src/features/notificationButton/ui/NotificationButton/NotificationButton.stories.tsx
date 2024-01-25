import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { NotificationButton } from './NotificationButton';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof NotificationButton>;

const Template: StoryFn<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
