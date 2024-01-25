import { Meta, StoryFn } from '@storybook/react';

import { ArticleView } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'entities/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ArticleViewSelector>;

const Template: StoryFn<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  view: ArticleView.SMALL,
};
