import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@theme', value)
    } catch (e) {
      // saving error
    }
  }
  
export const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@theme');
      if(value !== null) {
        return (value === 'true');
      }
      return true
    } catch(e) {
      return true;
    }
  }