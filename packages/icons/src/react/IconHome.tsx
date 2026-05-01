import type { SVGProps } from 'react';

export const IconHome = ({
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
      d='M11.532 2.414a.75.75 0 0 1 .937 0l10 8a.75.75 0 0 1-.937 1.172L20.25 10.56v8.94A2.25 2.25 0 0 1 18 21.75H6a2.25 2.25 0 0 1-2.25-2.25v-8.94l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2zM5.25 9.36 12 3.96l6.75 5.4V19.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8.75 14.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zm1.5.75v5h3.5v-5z'
      clipRule='evenodd'
    />
  </svg>
);
