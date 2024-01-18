import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { Text } from '@/shared/ui/Text';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <Text
      title="Title"
      text="text text text"
    />
  ),
};
