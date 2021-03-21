import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const RechargeIcon = () => {
  return (
    <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
  >
    <G clipPath="url(#prefix__clip0)" fill="#fff">
      <Path d="M1.12 8.265a.614.614 0 00.47-.003l1.84-.777a.615.615 0 00-.478-1.134l-.45.19a8.818 8.818 0 0116.61 1.34.615.615 0 101.191-.307A10.048 10.048 0 001.35 6.108l-.208-.492a.615.615 0 10-1.133.478l.776 1.84c.064.15.184.27.335.33zM20.91 14.863l-.776-1.84a.616.616 0 00-.806-.328l-1.84.777a.615.615 0 10.478 1.134l.515-.218A8.818 8.818 0 011.806 13.2a.615.615 0 00-1.191.309 10.048 10.048 0 0018.98 1.404l.182.43a.615.615 0 001.134-.479z" />
      <Path d="M12.059 4.143h-3.2a.615.615 0 00-.615.615v1.107h-.477c-.55 0-1 .453-1 1.009v9.056c0 .557.45 1.01 1 1.01h5.384c.55 0 1-.453 1-1.01V6.874c0-.556-.45-1.009-1-1.009h-.477V4.758a.615.615 0 00-.615-.615zm.86 2.953v8.613H7.999V7.096h.861c.34 0 .616-.276.616-.616V5.373h1.968V6.48c0 .34.276.616.616.616h.86z" />
      <Path d="M11.326 10.112h-.462l.5-.632a.616.616 0 00-.964-.764l-1.29 1.63a.615.615 0 00.482.996h.451l-.578.72a.615.615 0 00.96.77l1.38-1.72a.615.615 0 00-.48-1z" />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}

export default RechargeIcon
