import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import ArticleEditPage from './ArticleEditPage';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleEditPage>;

const Template: StoryFn<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
