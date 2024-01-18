let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId)
  })
  it('Успешная загрузка профиля', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Marat');
  });

  it('Редактирование профиля', () => {
    cy.updateProfile('first', 'last');
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'first');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'last');
  });
});
