import { Meta, StoryFn } from '@storybook/react';

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

const items = [
  {
    disabled: false,
    content: <div>Hello 1</div>,
    value: 'Hello 1',
  },
  {
    disabled: false,
    content: <div>Hello 2</div>,
    value: 'Hello 2',
  },
  {
    disabled: true,
    content: <div>Hello 3</div>,
    value: 'Hello 3',
  },
  {
    disabled: false,
    content: <div>Hello 4</div>,
    value: 'Hello 4',
  },
  {
    disabled: false,
    content: <div>Hello 5</div>,
    value: 'Hello 5',
  },
];
// TODO заполнить сторис
export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'ListBox',
  items,
};
