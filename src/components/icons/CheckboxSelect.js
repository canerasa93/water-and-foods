import * as React from 'react';

const SvgCheckboxSelect = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#checkbox_select_svg__a)">
      <rect x={7} y={6} width={22} height={22} rx={2} fill="#1EA4CE" />
    </g>
    <path
      d="m23.667 13-7.334 7.333L13 17"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="checkbox_select_svg__a"
        x={0}
        y={0}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={3.5} />
        <feColorMatrix values="0 0 0 0 0.364706 0 0 0 0 0.219608 0 0 0 0 0.752941 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_954" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_954" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgCheckboxSelect;
