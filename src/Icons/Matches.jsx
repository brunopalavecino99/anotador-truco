import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        stroke="#000"
        viewBox="0 0 20 20"
        {...props}
    >
        <path
            fill="#ba942c"
            d="M4 9a2.58 2.58 0 0 1-2-1.18V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7.82A2.58 2.58 0 0 1 4 9Z"
        />
        <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.62}
            d="M7 4.68C7 6.88 5.66 9 4 9S1 6.88 1 4.68 2.34 1 4 1s3 1.47 3 3.68Z"
        />
        <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.62}
            d="M2 8v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8"
            data-name="primary"
        />
    </svg>
)
export default SvgComponent
