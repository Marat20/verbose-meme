import { Meta, StoryFn } from '@storybook/react';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ArticlesInfiniteList',
  component: ArticlesInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as Meta<typeof ArticlesInfiniteList>;

const Template: StoryFn<typeof ArticlesInfiniteList> = (args) => (
  <ArticlesInfiniteList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
