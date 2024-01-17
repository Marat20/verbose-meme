import '@/app/styles/index.scss';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Meta, StoryFn } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as Meta<typeof ForbiddenPage>;

const Template: StoryFn<typeof ForbiddenPage> = (args) => (
  <ForbiddenPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
