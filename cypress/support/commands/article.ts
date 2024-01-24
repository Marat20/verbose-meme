import { Article } from '@/entities/Article';

const defaultArticle = {
  title: 'Scala news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://cloud4box.com/wp-content/uploads/python.jpg',
  views: 10222,
  createdAt: '24.01.2022',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) =>
  cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Authorization: 'asdasd' },
      body: article ?? defaultArticle,
    })
    .then((response) => response.body);

export const removeArticle = (articleId: string) =>
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asdasd' },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
