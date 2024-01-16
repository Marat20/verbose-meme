import { Meta, StoryFn } from '@storybook/react';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as Meta<typeof ArticleRecommendationsList>;

const Template: StoryFn<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
);

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: {
    id: '1',
    username: 'user',
  },
  blocks: [],
  type: [],
  title: 'title',
  subtitle: 'subtitle',
};

// FIXBUGS исправить моковый запрос

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
