import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../../../../shared/context/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;

  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.DARK,
  );

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setIsThemeInited(true);
    }
  }, [initialTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
