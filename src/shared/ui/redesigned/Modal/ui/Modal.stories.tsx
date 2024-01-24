import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
  necessitatibus pariatur nostrum molestiae excepturi quidem omnis ipsam
  dolorum tenetur, maxime, vero animi eligendi blanditiis velit
  perspiciatis esse. Magni, perspiciatis saepe.`,
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
  necessitatibus pariatur nostrum molestiae excepturi quidem omnis ipsam
  dolorum tenetur, maxime, vero animi eligendi blanditiis velit
  perspiciatis esse. Magni, perspiciatis saepe.`,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
