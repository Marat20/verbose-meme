import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'widgets/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Page>;

const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator({})];
