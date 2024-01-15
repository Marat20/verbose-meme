import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import AdminPanelPage from './AdminPanelPage';

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AdminPanelPage>;

const Template: StoryFn<typeof AdminPanelPage> = (args) => (
  <AdminPanelPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
