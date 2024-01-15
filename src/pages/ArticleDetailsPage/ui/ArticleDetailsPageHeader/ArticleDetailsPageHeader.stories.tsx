import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as Meta<typeof ArticleDetailsPageHeader>;

const Template: StoryFn<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
