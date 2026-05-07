import type { SVGProps } from 'react';

export const IconAdd = ({
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
      d='M12 1.75a.75.75 0 0 1 .75.75v19a.75.75 0 0 1-1.5 0v-19a.75.75 0 0 1 .75-.75'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M22.25 12a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1 0-1.5h19a.75.75 0 0 1 .75.75'
      clipRule='evenodd'
    />
  </svg>
);
