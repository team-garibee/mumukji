import type { SVGProps } from 'react';

export const IconCloseCircleFilled = ({
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
      d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-6.464-3.536a1 1 0 0 0-1.415 0L12 10.586 9.879 8.464A1 1 0 0 0 8.465 9.88L10.585 12l-2.12 2.121a1 1 0 1 0 1.414 1.415L12 13.414l2.121 2.122a1 1 0 1 0 1.415-1.415L13.414 12l2.122-2.121a1 1 0 0 0 0-1.415'
      clipRule='evenodd'
    />
  </svg>
);
