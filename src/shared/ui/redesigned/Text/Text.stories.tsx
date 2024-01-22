import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Meta, StoryFn } from '@storybook/react';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title title',
};

export const onlyText = Template.bind({});
onlyText.args = {
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

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'text text text text text text text text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

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
