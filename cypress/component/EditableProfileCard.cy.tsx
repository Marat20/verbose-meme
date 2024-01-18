import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
  cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
  it('playground', () => {
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID,
              },
            },
          },
        }}>
        <EditableProfileCard id={USER_ID} />
      </TestProvider>
    );
  });
});
