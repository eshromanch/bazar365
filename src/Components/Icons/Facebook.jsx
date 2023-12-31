import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M22.27 0H1.73A1.73 1.73 0 0 0 0 1.73v20.54C0 23.224.775 24 1.73 24h11.09v-9.281H9.703v-3.633h3.117V8.412c0-3.1 1.893-4.787 4.659-4.787 1.324 0 2.463.098 2.794.142v3.24h-1.907c-1.504 0-1.796.716-1.796 1.765v2.314h3.598l-.469 3.633H16.57V24h5.7A1.73 1.73 0 0 0 24 22.27V1.73A1.73 1.73 0 0 0 22.27 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
