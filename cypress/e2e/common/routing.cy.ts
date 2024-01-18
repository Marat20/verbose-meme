describe('Роутинг', () => {
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });
    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('ProfilePage').should('exist');
    });

    it('Переход на страницу статей', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlesPage').should('exist');
    });
  });

  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Переход открывает несуществующую страницу', () => {
      cy.visit('/asdasdadad');
      cy.getByTestId('NotFoundPage').should('exist');
    });
  });
});
