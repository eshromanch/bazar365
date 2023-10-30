import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={37}
    fill="none"
    {...props}
  >
    <path fill="#F2BC57" d="M0 37 4.5 0H22l4 37-13-4.5L0 37Z" />
  </svg>
)
export default SvgComponent
