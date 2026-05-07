import type { SVGProps } from 'react';

export const IconArrowUp = ({
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
      d='M2.293 17.121a1 1 0 0 1 0-1.414l9-9a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1-1.414 1.414L12 8.828l-8.293 8.293a1 1 0 0 1-1.414 0'
      clipRule='evenodd'
    />
  </svg>
);
