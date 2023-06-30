import ThemeContext from '@/context/ThemeContext';
import { useContext } from 'react';

const useTheme = (): string => {
  const { isDark } = useContext(ThemeContext);

  const theme = isDark ? "dark" : "light";

  return theme;
};

export default useTheme;