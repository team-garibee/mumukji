import type { SVGProps } from 'react';

export const IconImage = ({
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
      d='M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-3.794 3.995L18 22H6l-.206-.005a4 4 0 0 1-3.79-3.789L2 18V6a4 4 0 0 1 4-4zm-3.116 9.944a1.25 1.25 0 0 0-1.768 0l-8.271 8.27c.346.182.738.286 1.155.286h12a2.5 2.5 0 0 0 2.5-2.5v-.5l-.03.03zM6 3.5A2.5 2.5 0 0 0 3.5 6v12c0 .417.104.809.284 1.154l8.272-8.27a2.75 2.75 0 0 1 3.888 0L20.5 15.44V6A2.5 2.5 0 0 0 18 3.5zM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1'
    />
  </svg>
);
