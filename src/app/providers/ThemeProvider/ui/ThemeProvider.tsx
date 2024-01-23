import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/context/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;

  const [isThemeInited, setIsThemeInited] = useState(false);

  const { theme: defaultTheme } = useJsonSettings();
  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.DARK,
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
