import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#000000"
      d="M5.81.585a.2.2 0 0 1 .38 0l1.112 3.423a.2.2 0 0 0 .19.138h3.599a.2.2 0 0 1 .117.362l-2.91 2.115a.2.2 0 0 0-.073.223l1.111 3.423a.2.2 0 0 1-.307.223L6.118 8.377a.2.2 0 0 0-.236 0l-2.91 2.115a.2.2 0 0 1-.308-.223l1.111-3.423a.2.2 0 0 0-.072-.223L.792 4.508a.2.2 0 0 1 .117-.362h3.599a.2.2 0 0 0 .19-.138L5.81.585Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={12}
        y1={6}
        y2={6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={1} />
        <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
