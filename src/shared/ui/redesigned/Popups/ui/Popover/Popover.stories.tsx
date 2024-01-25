import { Meta, StoryFn } from '@storybook/react';

import { Popover } from './Popover';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  trigger: <div>132</div>,
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
      excepturi reprehenderit culpa ipsa minima dolor, sequi perspiciatis
      voluptate, explicabo distinctio deserunt. Tempora enim sint incidunt
      aliquid quisquam facere, est nam.
    </div>
  ),
};
