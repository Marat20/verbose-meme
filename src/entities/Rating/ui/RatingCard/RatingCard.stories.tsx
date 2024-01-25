import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { RatingCard } from './RatingCard';

export default {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof RatingCard>;

const Template: StoryFn<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Rating title',
};

export const WithFeedback = Template.bind({});
WithFeedback.args = {
  hasFeedback: true,
  feedbackTitle: 'Please estimate an article',
};

export const WithRating = Template.bind({});
WithRating.args = {
  rate: 3,
};
