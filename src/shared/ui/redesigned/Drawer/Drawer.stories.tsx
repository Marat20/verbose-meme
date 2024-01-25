import { Meta, StoryFn } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Card } from '../Card';
import { VStack } from '../Stack';
import { Text } from '../Text';
import { Drawer } from './Drawer';

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />;

const content = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
    userId: '1',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло какое-то событие',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '4',
    title: 'Уведомление 4',
    description: 'Произошло какое-то событие',
    userId: '1',
  },
  {
    id: '5',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
    userId: '2',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <VStack gap="16" max>
      {content?.map((item) => (
        <Card variant="outlined">
          <Text title={item.title} text={item.description} />
        </Card>
      ))}
    </VStack>
  ),
  isOpen: true,
};
