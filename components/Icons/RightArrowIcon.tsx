import * as React from "react"
const RightArrowIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={23}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M.25 21.886a.852.852 0 0 0 .93.184.852.852 0 0 0 .277-.184l10.227-10.168a.848.848 0 0 0 .186-.925.848.848 0 0 0-.185-.275L1.457.349A.856.856 0 0 0 0 .949c0 .225.09.44.25.6l9.626 9.569L.25 20.686a.847.847 0 0 0 0 1.2Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M12 0H0v22.235h12z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 22.235h12V0H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default RightArrowIcon
