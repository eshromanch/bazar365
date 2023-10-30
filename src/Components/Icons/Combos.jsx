import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={35}
    fill="none"
    {...props}
  >
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M29 34h11.44c.664 0 1.302-.224 1.788-.627a2.26 2.26 0 0 0 .834-1.545L46 7"
    />
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m38 7 1.27-4.8L43 1"
    />
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M26 7h21"
    />
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m23.75 25.25 5.913-5.913a3.71 3.71 0 0 1 2.625-1.087h.212a3.5 3.5 0 1 1 0 7h-28a3.5 3.5 0 1 1 0-7h7.901a10.5 10.5 0 0 1 7.424 3.075l3.925 3.925Zm-21 0h31.5v3.5A5.25 5.25 0 0 1 29 34H8a5.25 5.25 0 0 1-5.25-5.25v-3.5Z"
    />
    <path
      stroke="#F72D57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.502 13H18.5m0-7C10.41 6 3.744 9.073 2.851 16.5c-.115.962.683 1.75 1.649 1.75h28c.966 0 1.764-.788 1.648-1.75C33.256 9.073 26.59 6 18.5 6Zm-8.748 7H9.75h.002Zm14-1.75h-.002.002Z"
    />
  </svg>
)
export default SvgComponent
