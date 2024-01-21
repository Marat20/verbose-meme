import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { render, screen } from '@testing-library/react';

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
