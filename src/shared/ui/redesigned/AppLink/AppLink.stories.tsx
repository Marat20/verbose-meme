import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Meta, StoryFn } from '@storybook/react';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Text',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Text',
//   variant: AppLinkTheme.SECONDARY,
// };

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  variant: 'red',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  variant: 'primary',
  children: 'Text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const SecondaryDark = Template.bind({});
// SecondaryDark.args = {
//   children: 'Text',
//   variant: AppLinkTheme.SECONDARY,
// };
// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  variant: 'red',
};

RedDark.decorators = [ThemeDecorator(Theme.DARK)];
