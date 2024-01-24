import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComment } from './ArticleDetailsComment';

export default {
  title: 'pages/ArticleDetailsComment',
  component: ArticleDetailsComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as Meta<typeof ArticleDetailsComment>;

const Template: StoryFn<typeof ArticleDetailsComment> = (args) => (
  <ArticleDetailsComment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: '1',
};
