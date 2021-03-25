import React, { createContext, useState, useEffect } from 'react';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

import light from './light';
import dark from './dark';

type TTheme = 'dark' | 'light';

export const ThemeContext = React.createContext({
  isDark: true,
  theme: dark,
  setScheme: (scheme: TTheme) => {},
});
  
export const useTheme = () => React.useContext(ThemeContext)

export const ThemeProvider = (props: any) => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference

  /*
  * To enable changing the app theme dynamicly in the app (run-time)
  * we're gonna use useState so we can override the default device theme
  */
  const [isDark, setIsDark] = React.useState(colorScheme === "dark");

  // Listening to changes of device appearance while in run-time
  React.useEffect(() => {
      setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const defaultTheme = {
      isDark,
      // Chaning color schemes according to theme
      theme: isDark ? dark : light,
      // Overrides the isDark value will cause re-render inside the context.  
      setScheme: (scheme: TTheme) => setIsDark(scheme === "dark"),
    };
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({ children }: any) => (
  <AppearanceProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AppearanceProvider>
)

export default ThemeManager