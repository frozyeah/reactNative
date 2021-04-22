import { getData } from "./asyncStorage";

const checkTheme = async (): Promise<boolean | undefined> => {
  let scheme = await getData("@theme");
  if (scheme === undefined) return scheme;
  else return (scheme === 'true')
}

export default checkTheme;