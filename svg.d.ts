declare module "*.svg" {
    const content: any;
    export default content;
}
// declare module "*.svg" {
//     import React from 'react';
//     import { SvgProps } from "react-native-svg";
//     const content: React.FC<SvgProps>;
//     export default content;
//   }

declare module 'react-native-expo-viewport-units' {
    const vh: (n: number) => number;
    const vw: (n: number) => number;
    const vmin: (n: number) => number;
    const vmax: (n: number) => number;
    export {vh, vw, vmin, vmax};
}