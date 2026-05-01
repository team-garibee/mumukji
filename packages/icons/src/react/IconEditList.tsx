import type { SVGProps } from 'react';

export const IconEditList = ({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    width={size}
    height={size}
    aria-hidden='true'
    focusable='false'
    {...props}>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M20 15.75a.75.75 0 0 1 .75.75V19A3.75 3.75 0 0 1 17 22.75h-1.25a.75.75 0 0 1 0-1.5H17A2.25 2.25 0 0 0 19.25 19v-2.5a.75.75 0 0 1 .75-.75M3.25 5A3.75 3.75 0 0 1 7 1.25h10A3.75 3.75 0 0 1 20.75 5v3a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 17 2.75H7A2.25 2.25 0 0 0 4.75 5v14A2.25 2.25 0 0 0 7 21.25h1a.75.75 0 0 1 0 1.5H7A3.75 3.75 0 0 1 3.25 19z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.25 8A.75.75 0 0 1 8 7.25h7a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8M11.028 22.583a.75.75 0 0 1-.11-1.055l8.5-10.5a.75.75 0 1 1 1.165.944l-8.5 10.5a.75.75 0 0 1-1.055.11M7.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75'
      clipRule='evenodd'
    />
  </svg>
);
