import { getData } from "./asyncStorage";
import { useColorScheme } from 'react-native-appearance';

const checkTheme = async (): Promise<boolean> => {
  let scheme = await getData("@theme");
  let theme: boolean;

  if (scheme === undefined) theme = (useColorScheme() === 'dark');
  else theme = (scheme === 'true')

  return theme;
}

export default checkTheme;