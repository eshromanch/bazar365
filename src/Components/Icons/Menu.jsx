import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#3F3F3F"
      fillRule="evenodd"
      d="M2.1 16.4a.9.9 0 0 1 .9-.9h11a.9.9 0 1 1 0 1.8H3a.9.9 0 0 1-.9-.9ZM2.1 9.4a.9.9 0 0 1 .9-.9h18a.9.9 0 1 1 0 1.8H3a.9.9 0 0 1-.9-.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
