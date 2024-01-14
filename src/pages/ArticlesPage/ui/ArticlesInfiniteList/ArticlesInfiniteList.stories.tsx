import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

export default {
  title: 'pages/ArticlesInfiniteList',
  component: ArticlesInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesInfiniteList>;

const Template: StoryFn<typeof ArticlesInfiniteList> = (args) => (
  <ArticlesInfiniteList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
