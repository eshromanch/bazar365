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
      d="M16 1 2 14.5 16 28"
    />
  </svg>
)
export default SvgComponent
