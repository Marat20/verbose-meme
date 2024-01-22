import '@/app/styles/index.scss';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { Meta, StoryFn } from '@storybook/react';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCardDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCardDeprecated>;

const Template: StoryFn<typeof ProfileCardDeprecated> = (args) => (
  <ProfileCardDeprecated {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
