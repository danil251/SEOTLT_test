import * as React from "react"

const Pen = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="m18 2-2.414 2.414 4 4L22 6l-4-4zm-3.924 3.924L3 17v4h4L18.076 9.924l-4-4z"/>
    </svg>
)
export default Pen
