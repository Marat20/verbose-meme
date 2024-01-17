import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { FC, ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/context/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
