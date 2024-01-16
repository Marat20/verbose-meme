import { Meta, StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import ForbiddenPage from './ForbiddenPage';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ForbiddenPage>;

const Template: StoryFn<typeof ForbiddenPage> = (args) => (
  <ForbiddenPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
