import '@/app/styles/index.scss';
import { Meta, StoryFn } from '@storybook/react';
import ArticleRating from './ArticleRating';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleRating>;

const Template: StoryFn<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
