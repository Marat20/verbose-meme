import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof CommentCard>;

const Template: StoryFn<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

const args = {
  comment: {
    id: '1',
    text: 'hello world',
    user: {
      id: '1',
      username: 'Marat',
    },
  },
};

export const Primary = Template.bind({});
Primary.args = args;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
