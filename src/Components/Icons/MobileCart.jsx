import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={29}
    fill="none"
    {...props}
  >
    <g fill="#3F3F3F" clipPath="url(#a)">
      <path d="M10.368 25.389a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM21 25.389a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM25.729 4.677a.777.777 0 0 0-.599-.288H8.937l.505 1.555h14.67l-2.077 9.334H10.368L6.813 4.023a.778.778 0 0 0-.513-.505l-3.189-.98a.781.781 0 0 0-.459 1.493l2.792.856 3.57 11.277-1.275 1.043-.101.1a2.069 2.069 0 0 0-.062 2.637 2.14 2.14 0 0 0 1.757.778h12.981a.778.778 0 1 0 0-1.555H9.21a.52.52 0 0 1-.436-.778l1.875-1.556h12.009a.777.777 0 0 0 .777-.606L25.9 5.337a.776.776 0 0 0-.171-.66Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent