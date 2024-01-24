import { Meta, StoryFn } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentList>;

const Template: StoryFn<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: {
        id: '1',
        username: 'Marat',
      },
    },
    {
      id: '2',
      text: 'hello world 12',
      user: {
        id: '2',
        username: 'Timur',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
