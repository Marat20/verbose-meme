import { Meta, StoryFn } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: 'outline',
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  disabled: true,
};

export const Success = Template.bind({});
Success.args = {
  children: 'Text',
  color: 'success',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Text',
  color: 'error',
};
