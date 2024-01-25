import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from '../../deprecated/Button';

describe('Button', () => {
  test('first', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('second', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
