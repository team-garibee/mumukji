import type { SVGProps } from 'react';

export const IconCloseCircleOutlined = ({
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
      d='M15.359 8.641a.75.75 0 0 0-1.06 0L8.64 14.298a.75.75 0 0 0 1.06 1.06l5.658-5.656a.75.75 0 0 0 0-1.06'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8.641 8.641a.75.75 0 0 1 1.06 0l5.658 5.657a.75.75 0 0 1-1.06 1.06L8.64 9.703a.75.75 0 0 1 0-1.06'
      clipRule='evenodd'
    />
  </svg>
);
