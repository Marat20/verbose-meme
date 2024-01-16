import { fireEvent, screen, waitFor } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from '@/widgets/Sidebar';

describe('Sidebar', () => {
  test('first', () => {
    ComponentRender(<Sidebar />);
    waitFor(() => expect(screen.getByTestId('sidebar')).toBeInTheDocument());
  });

  test('second', () => {
    ComponentRender(<Sidebar />);
    waitFor(() => {
      const toggleBtn = screen.getByTestId('sidebar-toggle');
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
  });
});
