import type { SVGProps } from 'react';

export const IconAddCircleOutlined = ({
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
      d='M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M16.75 12a.75.75 0 0 0-.75-.75H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 .75-.75'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75'
      clipRule='evenodd'
    />
  </svg>
);
