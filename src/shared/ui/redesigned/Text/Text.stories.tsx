import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title title',
  text: 'text text text text text text text text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title title',
  text: 'text text text text text text text text',
  variant: 'error',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text text text text text text text text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title title',
  text: 'text text text text text text text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title title',
  text: 'text text text text text text text text',
  variant: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'text text text text text text text text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title title',
  text: 'text text text text text text text text',
  size: 'size_l',
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title title',
  text: 'text text text text text text text text',
  size: 'size_m',
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title title',
  text: 'text text text text text text text text',
  size: 'size_s',
};
