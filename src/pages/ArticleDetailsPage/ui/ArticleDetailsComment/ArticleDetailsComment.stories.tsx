import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleDetailsComment } from './ArticleDetailsComment';

export default {
  title: 'pages/ArticleDetailsComment',
  component: ArticleDetailsComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetailsComment>;

const Template: StoryFn<typeof ArticleDetailsComment> = (args) => (
  <ArticleDetailsComment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
