import { Meta, StoryFn } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { UiDesignSwitcher } from './UiDesignSwitcher';

export default {
  title: 'features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as Meta<typeof UiDesignSwitcher>;

const Template: StoryFn<typeof UiDesignSwitcher> = (args) => (
  <UiDesignSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
