import '@/app/styles/index.scss';
import { Meta, StoryFn } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'entities/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleViewSelector>;

const Template: StoryFn<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
