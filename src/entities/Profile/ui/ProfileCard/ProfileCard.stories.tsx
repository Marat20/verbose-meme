import { Meta, StoryFn } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

const args = {
  data: {
    username: 'Admin',
    firstname: 'First',
    lastname: 'Last',
    age: 28,
    country: Country.FRANCE,
    currency: Currency.EUR,
    avatar: AvatarImg,
  },
};

export const Primary = Template.bind({});
Primary.args = args;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = args;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
