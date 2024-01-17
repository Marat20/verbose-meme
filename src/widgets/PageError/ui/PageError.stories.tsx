import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Meta, StoryFn } from '@storybook/react';
import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
