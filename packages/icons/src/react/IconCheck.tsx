import type { SVGProps } from 'react';

export const IconCheck = ({
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
      d='M20.53 6.47a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L10 15.94l9.47-9.47a.75.75 0 0 1 1.06 0'
      clipRule='evenodd'
    />
  </svg>
);
