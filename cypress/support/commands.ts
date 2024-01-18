import { login } from './commands/login';

/// <reference types="cypress" />

Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login(usename?: string, password?: string): Chainable<void>;
    }
  }
}
