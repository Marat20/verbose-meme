import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AddCommentForm>;

const Template: StoryFn<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator({})];
