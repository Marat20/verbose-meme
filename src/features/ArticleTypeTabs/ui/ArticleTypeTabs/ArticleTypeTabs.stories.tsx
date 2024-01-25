import { Meta, StoryFn } from '@storybook/react';

import { ArticleType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'entities/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ArticleTypeTabs>;

const Template: StoryFn<typeof ArticleTypeTabs> = (args) => (
  <ArticleTypeTabs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: ArticleType.ECONOMICS,
};
