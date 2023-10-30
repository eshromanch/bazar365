import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={29}
    fill="none"
    {...props}
  >
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeWidth={2}
      d="m1 28 14-13.5L1 1"
    />
  </svg>
)
export default SvgComponent
