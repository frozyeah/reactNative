// export const DayTheme = {
//     dark: false,
//     colors:{
//         backgroundColor: "#ffffff"
//     }
// }

// export const DarkTheme = {
//     dark: true,
//     colors:{
//         backgroundColor: "#000000"
//     }
// }

// import React from 'react'
// import { Appearance } from 'react-native-appearance'
// import { getTheme } from '../theme'

// // set default colour scheme from OS
// const osTheme = Appearance.getColorScheme();

// // initiate context
// export const ManageThemeContext: React.Context<any> = React.createContext({
//   mode: osTheme,
//   theme: getTheme(osTheme),
//   toggle: () => { }
// });

// // define useTheme hook for functional components
// export const useTheme = () => React.useContext(ManageThemeContext);

// // initiate context provider
// export class ThemeManager extends React.Component<any, any> {

//   state = {
//     mode: osTheme
//   };

//   componentDidUpdate () {
//     console.log('theme updated');
//   }

//   toggleTheme = async () => {
//     this.state.mode === 'light'
//       ? this.setState({
//         mode: 'dark'
//       })
//       : this.setState({
//         mode: 'light'
//       })
//   }

//   render () {
//     return (
//       <ManageThemeContext.Provider value={{
//         mode: this.state.mode,
//         theme: getTheme(this.state.mode),
//         toggle: this.toggleTheme
//       }}>
//         {this.props.children}
//       </ManageThemeContext.Provider>
//     )
//   }
// }

// export default ThemeManager;