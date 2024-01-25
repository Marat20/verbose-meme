import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'tab 1',
    },
    {
      value: 'tab 2',
      content: 'tab 2',
    },
    {
      value: 'tab 3',
      content: 'tab 3',
    },
  ],
  value: 'tab 2',
  onTabClick: action('Tab Click'),
};
