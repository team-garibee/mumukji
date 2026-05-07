import type { SVGProps } from 'react';

export const IconStarFilled = ({
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
      d='M11.077 2.22c.341-.821 1.505-.821 1.846 0l2.017 4.847a1 1 0 0 0 .843.613l5.233.42c.887.07 1.246 1.177.57 1.756L17.6 13.27a1 1 0 0 0-.323.992l1.219 5.106c.206.866-.735 1.55-1.494 1.086l-4.48-2.737a1 1 0 0 0-1.043 0l-4.48 2.737c-.76.464-1.7-.22-1.495-1.085l1.219-5.107a1 1 0 0 0-.323-.992L2.413 9.856c-.675-.579-.316-1.685.57-1.756l5.234-.42a1 1 0 0 0 .844-.613z'
    />
  </svg>
);
