import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
