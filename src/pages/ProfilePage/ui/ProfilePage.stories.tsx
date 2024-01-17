import '@/app/styles/index.scss';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Meta, StoryFn } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'entities/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'Admin',
        firstname: 'First',
        lastname: 'Last',
        age: 28,
        country: Country.FRANCE,
        currency: Currency.EUR,
        avatar: AvatarImg,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'Admin',
        firstname: 'First',
        lastname: 'Last',
        age: 28,
        country: Country.FRANCE,
        currency: Currency.EUR,
        avatar: AvatarImg,
      },
    },
  }),
];
