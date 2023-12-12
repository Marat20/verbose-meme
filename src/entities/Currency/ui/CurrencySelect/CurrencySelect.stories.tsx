import { Meta, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: '/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
