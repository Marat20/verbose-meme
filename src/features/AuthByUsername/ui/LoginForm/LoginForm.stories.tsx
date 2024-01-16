import { Meta, StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: {
      username: '123',
      password: 'asd',
    },
  }),
];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};

LoginFormDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: '123',
      password: 'asd',
    },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};

WithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: '123',
      password: 'asd',
      error: 'ERROR',
    },
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
