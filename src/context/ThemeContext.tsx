import React, { createContext, useContext, useEffect } from 'react';

type ThemeContextType = {
  darkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Always enable dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode: true }}>
      {children}
    </ThemeContext.Provider>
  );
};