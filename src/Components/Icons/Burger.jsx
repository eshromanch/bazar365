import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m23.75 20.25 5.913-5.913a3.71 3.71 0 0 1 2.625-1.087h.212a3.5 3.5 0 1 1 0 7h-28a3.5 3.5 0 1 1 0-7h7.901a10.5 10.5 0 0 1 7.424 3.075l3.925 3.925Zm-21 0h31.5v3.5A5.25 5.25 0 0 1 29 29H8a5.25 5.25 0 0 1-5.25-5.25v-3.5Z"
    />
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.502 8H18.5m0-7C10.41 1 3.744 4.073 2.852 11.5c-.116.963.682 1.75 1.648 1.75h28c.966 0 1.764-.787 1.648-1.75C33.256 4.073 26.59 1 18.5 1ZM9.752 8H9.75h.002Zm14-1.75h-.002.002Z"
    />
  </svg>
)
export default SvgComponent
