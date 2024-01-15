import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { AvatarDropdown } from './AvatarDropdown';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AvatarDropdown>;

const Template: StoryFn<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
