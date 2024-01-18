describe('Список статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles');
    });
  });

  it('Статьи подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it.skip('Застабанный тест', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
