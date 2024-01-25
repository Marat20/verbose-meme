import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), NewDesignDecorator],
} as Meta<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    id: '1',
    title: 'Title',
    description: 'Some description',
  },
};
