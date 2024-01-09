import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticlesPageFilter } from './ArticlesPageFilter';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ArticlesPageFilter',
  component: ArticlesPageFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesPageFilter>;

const Template: StoryFn<typeof ArticlesPageFilter> = (args) => (
  <ArticlesPageFilter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
