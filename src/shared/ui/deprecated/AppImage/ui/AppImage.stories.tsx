import '@/app/styles/index.scss';
import { Meta, StoryFn } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
  title: 'shared/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AppImage>;

const Template: StoryFn<typeof AppImage> = (args) => <AppImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
