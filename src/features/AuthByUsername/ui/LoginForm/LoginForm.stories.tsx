import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

const loginForm = {
  username: '123',
  password: 'asd',
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};

LoginFormDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ loginForm }),
];

export const WithError = Template.bind({});
WithError.args = {};

WithError.decorators = [
  StoreDecorator({
    loginForm: { ...loginForm, error: 'ERROR' },
  }),
];

export const WithLoading = Template.bind({});
WithLoading.args = {};

WithLoading.decorators = [
  StoreDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];
