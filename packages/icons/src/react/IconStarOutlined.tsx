import type { SVGProps } from 'react';

export const IconStarOutlined = ({
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
      stroke='currentColor'
      strokeWidth={1.5}
      d='M11.77 2.508a.25.25 0 0 1 .46 0l2.017 4.847a1.75 1.75 0 0 0 1.476 1.073l5.233.42a.25.25 0 0 1 .143.439l-3.988 3.415a1.75 1.75 0 0 0-.563 1.735l1.219 5.106a.25.25 0 0 1-.375.272l-4.48-2.736a1.75 1.75 0 0 0-1.824 0l-4.48 2.736a.25.25 0 0 1-.374-.272l1.218-5.106a1.75 1.75 0 0 0-.563-1.735L2.9 9.287a.25.25 0 0 1 .143-.44l5.233-.419a1.75 1.75 0 0 0 1.476-1.073z'
    />
  </svg>
);
