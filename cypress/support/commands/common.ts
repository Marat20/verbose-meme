import { User } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { selectByTestId } from 'cypress/helpers/selectByTestId';

export const login = (username: string = 'admin', password: string = '123') => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/login`,
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));

      return body;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(usename?: string, password?: string): Chainable<User>;
      getByTestId(testid: string): ReturnType<typeof cy.get>;
    }
  }
}
