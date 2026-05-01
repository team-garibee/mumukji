import type { SVGProps } from 'react';

export const IconEdit = ({
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
      d='M2.25 21a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M16.347 2.25a.75.75 0 0 1 .531.22l3.652 3.654a.75.75 0 0 1 0 1.06L10.19 17.53a.75.75 0 0 1-.53.22H6a.75.75 0 0 1-.75-.75v-3.64a.75.75 0 0 1 .22-.53L15.816 2.47a.75.75 0 0 1 .53-.22m0 1.811-9.597 9.61v2.579h2.598l9.592-9.596z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12.72 5.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06'
      clipRule='evenodd'
    />
  </svg>
);
