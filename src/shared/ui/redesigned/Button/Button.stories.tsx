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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  variant: 'clear',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: 'outline',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  size: 'size_l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  size: 'size_xl',
};

// export const Background = Template.bind({});
// Background.args = {
//   children: 'Text',
//   variant: ButtonTheme.BACKGROUND,
// };

// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//   children: 'Text',
//   variant: ButtonTheme.BACKGROUND_INVERTED,
// };

// export const Square = Template.bind({});
// Square.args = {
//   children: '>',
//   variant: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
// };

// export const SquareSizeL = Template.bind({});
// SquareSizeL.args = {
//   children: '>',
//   variant: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
//   size: 'size_l',
// };

// export const SquareSizeXL = Template.bind({});
// SquareSizeXL.args = {
//   children: '>',
//   variant: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
//   size: 'size_xl',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   children: '>',
//   variant: ButtonTheme.BACKGROUND_INVERTED,
//   disabled: true,
// };
