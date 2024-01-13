import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args) => <ListBox {...args} />;

// TODO заполнить сторис
export const Primary = Template.bind({});
Primary.args = {};
