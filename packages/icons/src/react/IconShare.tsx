import type { SVGProps } from 'react';

export const IconShare = ({
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
      d='M14.25 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M3.25 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15.642 6.399a.75.75 0 0 1-.253 1.03l-6.33 3.835a.75.75 0 0 1-.778-1.283l6.33-3.835a.75.75 0 0 1 1.03.253M8.024 12.9a.75.75 0 0 1 1.027-.264l6.67 3.942a.75.75 0 0 1-.763 1.291l-6.67-3.941a.75.75 0 0 1-.264-1.028'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M14.25 18.5a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0m3.25 1.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5'
      clipRule='evenodd'
    />
  </svg>
);
