import type { SVGProps } from 'react';

export const IconTrash = ({
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
      d='M9.778 10.139a.75.75 0 0 1 .75.75v6.666a.75.75 0 0 1-1.5 0V10.89a.75.75 0 0 1 .75-.75m4.444 0a.75.75 0 0 1 .75.75v6.666a.75.75 0 0 1-1.5 0V10.89a.75.75 0 0 1 .75-.75'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4.583 6h14.834v14.805a2.25 2.25 0 0 1-2.25 2.25H6.833a2.25 2.25 0 0 1-2.25-2.25zm1.5 1.5v13.305c0 .415.336.75.75.75h10.334a.75.75 0 0 0 .75-.75V7.5z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.917 7.494h8.166V5.3a3.75 3.75 0 0 0-3.75-3.75h-.666a3.75 3.75 0 0 0-3.75 3.75zm1.5-1.5V5.3a2.25 2.25 0 0 1 2.25-2.25h.666a2.25 2.25 0 0 1 2.25 2.25v.694z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2.25 6.75A.75.75 0 0 1 3 6h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75'
      clipRule='evenodd'
    />
  </svg>
);
