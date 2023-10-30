import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M22.98 5.34c-.651-1.158-1.358-1.371-2.796-1.452-1.437-.097-5.05-.138-8.181-.138-3.136 0-6.752.04-8.187.136-1.435.083-2.143.295-2.8 1.454C.345 6.497 0 8.489 0 11.995v.012c0 3.492.345 5.5 1.016 6.644.657 1.158 1.363 1.368 2.798 1.465 1.438.085 5.053.134 8.189.134 3.13 0 6.744-.05 8.183-.132 1.438-.098 2.145-.307 2.796-1.465C23.657 17.508 24 15.5 24 12.008v-.012c0-3.508-.342-5.5-1.02-6.657ZM9 16.5v-9l7.5 4.5L9 16.5Z"
    />
  </svg>
)
export default SvgComponent
