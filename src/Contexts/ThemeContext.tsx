import React from 'react';
import Typography from '~Style/Typography';
import Colors from '~Style/Colors';
import Spacing from '~Style/Spacing';

const ThemeContext = React.createContext({
  fonts: Typography,
  colors: Colors,
  spacing: Spacing,
});

interface IThemeProvider {
  children: React.ReactNode;
}
export const ThemeProvider = ({children}: IThemeProvider) => {
  const themeData = React.useMemo(() => {
    const theme = {fonts: Typography, colors: Colors, spacing: Spacing};
    return theme;
  }, []);

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => React.useContext(ThemeContext);
