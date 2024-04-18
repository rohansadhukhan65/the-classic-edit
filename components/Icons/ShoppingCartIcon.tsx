import * as React from "react"
const ShoppingCartIcon = (props : any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#3B2A22"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M9.113 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20.113 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1.113 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.6-8.39h-17" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.047 0H24.06v24H.047z" />
      </clipPath>
    </defs>
  </svg>
)
export default ShoppingCartIcon
