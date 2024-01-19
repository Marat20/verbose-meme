import { fireEvent, screen, waitFor } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('first', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    waitFor(() =>
      expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10'),
    );
  });

  test('increment', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    waitFor(() => {
      const incrementBtn = screen.getByTestId('increment-btn');

      expect(screen.getByTestId('value-title')).toHaveTextContent('value = 11');
      fireEvent.click(incrementBtn);
    });
  });

  test('decrement', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    waitFor(() => {
      const decrementBtn = screen.getByTestId('decrement-btn');

      expect(screen.getByTestId('value-title')).toHaveTextContent('value = 9');
      fireEvent.click(decrementBtn);
    });
  });
});
