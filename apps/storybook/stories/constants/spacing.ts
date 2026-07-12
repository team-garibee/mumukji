export const SPACING_OPTIONS = [
  'null',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
] as const;

export const spacingControl = {
  control: 'select',
  options: SPACING_OPTIONS,
  table: {
    type: {
      summary: SPACING_OPTIONS.map((value) => `'${value}'`).join(' | '),
    },
  },
} as const;
