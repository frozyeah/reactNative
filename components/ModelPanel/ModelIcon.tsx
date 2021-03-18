import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ModelIcon = () => {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      style={{marginTop:"6.5%"}}
    >
      <G clipPath="url(#prefix__clip0)" fill="#fff">
        <Path d="M15.8 3.679a.88.88 0 10-.63 1.645 8.19 8.19 0 015.267 7.654c0 4.517-3.675 8.192-8.192 8.192s-8.191-3.675-8.191-8.192A8.19 8.19 0 019.32 5.324a.88.88 0 00-.63-1.645 9.95 9.95 0 00-6.398 9.3 9.948 9.948 0 009.953 9.952 9.948 9.948 0 009.954-9.953 9.95 9.95 0 00-6.4-9.3z" />
        <Path d="M12.245.382a.88.88 0 00-.88.881V9.89a.88.88 0 101.76 0V1.263a.88.88 0 00-.88-.88z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill="#fff"
            transform="translate(.97 .382)"
            d="M0 0h22.549v22.549H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ModelIcon
