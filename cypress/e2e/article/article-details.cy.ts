let currentArticleId: string;

describe('Отдельная статья', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('Видно содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.title').should('exist');
  });

  it('Видно список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('Оставить комментарий', () => {
    cy.getByTestId('ArticleDetails.title');
    cy.getByTestId('ArticleRecommendationsList').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();

    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('Оставить оценку', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.title');
    cy.getByTestId('RatingCard').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();

    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
