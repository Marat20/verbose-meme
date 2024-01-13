import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { Flex } from './Flex';

export default {
  title: 'shared/Stack/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  gap: '4',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  gap: '8',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fouth</div>
    </>
  ),
};
