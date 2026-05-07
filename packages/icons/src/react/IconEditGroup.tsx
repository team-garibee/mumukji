import type { SVGProps } from 'react';

export const IconEditGroup = ({
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
      d='M17.847 2.25a.75.75 0 0 1 .531.22l3.652 3.654a.75.75 0 0 1 0 1.06L11.69 17.53a.75.75 0 0 1-.53.22H7.5a.75.75 0 0 1-.75-.75v-3.64a.75.75 0 0 1 .22-.53L17.316 2.47a.75.75 0 0 1 .53-.22m0 1.811-9.597 9.61v2.579h2.598l9.592-9.596z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M14.22 5.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.25 5.5A2.25 2.25 0 0 1 3.5 3.25h6a.75.75 0 0 1 .53.22l1.5 1.5a.75.75 0 0 1-1.06 1.06L9.19 4.75H3.5a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75V11a.75.75 0 0 1 1.5 0v8.5a2.25 2.25 0 0 1-2.25 2.25h-17a2.25 2.25 0 0 1-2.25-2.25z'
      clipRule='evenodd'
    />
  </svg>
);
