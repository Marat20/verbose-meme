import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { AppLogo } from './AppLogo';

export default {
  title: 'shared/AppLogo',
  component: AppLogo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof AppLogo>;

const Template: StoryFn<typeof AppLogo> = (args) => <AppLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
