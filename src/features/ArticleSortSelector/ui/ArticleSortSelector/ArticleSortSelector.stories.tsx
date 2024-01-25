import { Meta, StoryFn } from '@storybook/react';

import { ArticleSortFiels } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'entities/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ArticleSortSelector>;

const Template: StoryFn<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  sort: ArticleSortFiels.VIEWS,
  order: 'asc',
};
