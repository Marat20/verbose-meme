import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeSwitcher, ThemeSwitcherProps } from './ThemeSwitcher';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args: ThemeSwitcherProps) => (
  <ThemeSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
