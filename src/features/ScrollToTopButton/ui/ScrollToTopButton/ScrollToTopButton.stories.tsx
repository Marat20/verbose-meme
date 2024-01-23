import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ScrollToTopButton } from './ScrollToTopButton';

export default {
  title: 'features/ScrollToTopButton',
  component: ScrollToTopButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ScrollToTopButton>;

const Template: StoryFn<typeof ScrollToTopButton> = (args) => (
  <ScrollToTopButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
