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
Primary.args = {
  src: 'https://i.pinimg.com/originals/b0/7f/67/b07f67f9fd776addb7096edbe894ad71.png',
  alt: 'avatar',
  sizes: '50px',
};
