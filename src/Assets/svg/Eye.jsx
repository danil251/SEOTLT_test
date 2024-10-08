import * as React from "react"
const Eye = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={124}
        height={124}
        style={{
            display: 'flex',
            position: 'absolute',
            transform: 'scale(.05)',
            top: 0,
            left: 0
        }}
        {...props}
    >
        <path d="M256 96C144.341 96 47.559 161.021 0 256c47.559 94.979 144.341 160 256 160 111.656 0 208.439-65.021 256-160-47.559-94.979-144.344-160-256-160zm126.225 84.852c30.082 19.187 55.572 44.887 74.719 75.148-19.146 30.261-44.639 55.961-74.719 75.148C344.428 355.257 300.779 368 256 368c-44.78 0-88.428-12.743-126.225-36.852C99.695 311.96 74.205 286.26 55.058 256c19.146-30.262 44.637-55.962 74.717-75.148a235.143 235.143 0 0 1 5.929-3.65C130.725 190.866 128 205.613 128 221c0 70.691 57.308 128 128 128 70.691 0 128-57.309 128-128 0-15.387-2.725-30.134-7.703-43.799a240.633 240.633 0 0 1 5.928 3.651zM256 205c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z" />
    </svg>
)
export default Eye
