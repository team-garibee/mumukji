export const color = {
  bg: {
    'overlay-dim': {
      value: 'rgba(0, 0, 0, 0.6)',
      primitive: 'color-alpha-black-60',
    },
    'layer-default': {
      value: '#fffaf2',
      primitive: 'color-cream-50',
    },
    'layer-basement': {
      value: '#fff4dd',
      primitive: 'color-cream-100',
    },
    'layer-container': {
      value: '#ffffff',
      primitive: 'color-gray-0',
    },
    'brand-solid': {
      value: '#f9603e',
      primitive: 'color-vermilion-500',
    },
    'brand-solid-pressed': {
      value: '#d82d07',
      primitive: 'color-vermilion-700',
    },
    'brand-weak': {
      value: '#fee8e3',
      primitive: 'color-vermilion-50',
    },
    'brand-weak-pressed': {
      value: '#fca491',
      primitive: 'color-vermilion-200',
    },
    'interactive-solid': {
      value: '#3d5cff',
      primitive: 'color-blue-500',
    },
    'interactive-solid-pressed': {
      value: '#1038ff',
      primitive: 'color-blue-700',
    },
    'interactive-weak': {
      value: '#e3e8ff',
      primitive: 'color-blue-50',
    },
    'interactive-weak-pressed': {
      value: '#acbaff',
      primitive: 'color-blue-100',
    },
    'informative-solid': {
      value: '#3d5cff',
      primitive: 'color-blue-500',
    },
    'informative-weak': {
      value: '#e3e8ff',
      primitive: 'color-blue-50',
    },
    'negative-solid': {
      value: '#ff3861',
      primitive: 'color-pink-500',
    },
    'negative-solid-pressed': {
      value: '#e51742',
      primitive: 'color-pink-700',
    },
    'negative-weak': {
      value: '#ffe0e7',
      primitive: 'color-pink-50',
    },
    'negative-weak-pressed': {
      value: '#ffc3d0',
      primitive: 'color-pink-100',
    },
    'highlight-weak': {
      value: '#fff8db',
      primitive: 'color-yellow-50',
    },
    'highlight-solid': {
      value: '#ffc301',
      primitive: 'color-yellow-500',
    },
    disabled: {
      value: '#f2f2f2',
      primitive: 'color-gray-50',
    },
    'neutral-subtle': {
      value: '#ffffff',
      primitive: 'color-gray-0',
    },
    'neutral-subtle-pressed': {
      value: '#f2f2f2',
      primitive: 'color-gray-50',
    },
    'highlight-muted': {
      value: '#ffe992',
      primitive: 'color-yellow-100',
    },
    'layer-floating': {
      value: '#ffffff',
      primitive: 'color-gray-0',
    },
    'transparent-pressed': {
      value: 'rgba(0, 0, 0, 0.05)',
      primitive: 'color-alpha-black-5',
    },
    'neutral-solid': {
      value: '#424242',
      primitive: 'color-gray-700',
    },
    'neutral-solid-pressed': {
      value: '#1a1a1a',
      primitive: 'color-gray-900',
    },
    'neutral-weak': {
      value: '#d6d6d6',
      primitive: 'color-gray-200',
    },
    'neutral-weak-pressed': {
      value: '#bdbdbd',
      primitive: 'color-gray-300',
    },
  },
  fg: {
    brand: {
      value: '#f24822',
      primitive: 'color-vermilion-600',
    },
    'brand-contrast': {
      value: '#d82d07',
      primitive: 'color-vermilion-700',
    },
    interactive: {
      value: '#2649f5',
      primitive: 'color-blue-600',
    },
    'interactive-contrast': {
      value: '#1038ff',
      primitive: 'color-blue-700',
    },
    informative: {
      value: '#2649f5',
      primitive: 'color-blue-600',
    },
    'informative-subtle': {
      value: '#bdbdbd',
      primitive: 'color-gray-300',
    },
    'informative-contrast': {
      value: '#1038ff',
      primitive: 'color-blue-700',
    },
    negative: {
      value: '#e51742',
      primitive: 'color-pink-700',
    },
    highlight: {
      value: '#ffa100',
      primitive: 'color-yellow-700',
    },
    neutral: {
      value: '#1a1a1a',
      primitive: 'color-gray-900',
    },
    'neutral-muted': {
      value: '#424242',
      primitive: 'color-gray-700',
    },
    'neutral-subtle': {
      value: '#808080',
      primitive: 'color-gray-500',
    },
    'neutral-faint': {
      value: '#bdbdbd',
      primitive: 'color-gray-300',
    },
    placeholder: {
      value: '#bdbdbd',
      primitive: 'color-gray-300',
    },
    disabled: {
      value: '#bdbdbd',
      primitive: 'color-gray-300',
    },
    'on-solid': {
      value: '#ffffff',
      primitive: 'color-gray-0',
    },
  },
  stroke: {
    'neutral-weak': {
      value: '#d6d6d6',
      primitive: 'color-gray-200',
    },
    'neutral-solid': {
      value: '#616161',
      primitive: 'color-gray-600',
    },
    'neutral-subtle': {
      value: '#e5e5e5',
      primitive: 'color-gray-100',
    },
    'brand-solid': {
      value: '#f9603e',
      primitive: 'color-vermilion-500',
    },
    'brand-weak': {
      value: '#fca491',
      primitive: 'color-vermilion-200',
    },
    'interactive-solid': {
      value: '#3d5cff',
      primitive: 'color-blue-500',
    },
    'negative-solid': {
      value: '#ff3861',
      primitive: 'color-pink-500',
    },
    'interactive-weak': {
      value: '#90a3ff',
      primitive: 'color-blue-200',
    },
    'negative-weak': {
      value: '#ffa0b5',
      primitive: 'color-pink-200',
    },
  },
} as const;

export const borderWidth = {
  regular: {
    value: '1',
    primitive: 'border-width-1',
  },
  strong: {
    value: '2',
    primitive: 'border-width-2',
  },
} as const;

export const radius = {
  xs: {
    value: '4',
    primitive: 'radius-4',
  },
  s: {
    value: '8',
    primitive: 'radius-8',
  },
  m: {
    value: '16',
    primitive: 'radius-16',
  },
  l: {
    value: '24',
    primitive: 'radius-24',
  },
  full: {
    value: '9999',
    primitive: 'radius-full',
  },
} as const;

export const spacing = {
  '2xs': {
    value: '4',
    primitive: 'spacing-4',
  },
  xs: {
    value: '8',
    primitive: 'spacing-8',
  },
  sm: {
    value: '12',
    primitive: 'spacing-12',
  },
  md: {
    value: '16',
    primitive: 'spacing-16',
  },
  xl: {
    value: '24',
    primitive: 'spacing-24',
  },
  lg: {
    value: '20',
    primitive: 'spacing-20',
  },
  '2xl': {
    value: '28',
    primitive: 'spacing-28',
  },
  null: {
    value: '0',
    primitive: 'spacing-0',
  },
  '3xl': {
    value: '32',
    primitive: 'spacing-32',
  },
  '4xl': {
    value: '36',
    primitive: 'spacing-36',
  },
  '5xl': {
    value: '40',
    primitive: 'spacing-40',
  },
  '6xl': {
    value: '44',
    primitive: 'spacing-44',
  },
  '7xl': {
    value: '48',
    primitive: 'spacing-48',
  },
  '8xl': {
    value: '52',
    primitive: 'spacing-52',
  },
  '9xl': {
    value: '56',
    primitive: 'spacing-56',
  },
  '10xl': {
    value: '60',
    primitive: 'spacing-60',
  },
  '11xl': {
    value: '64',
    primitive: 'spacing-64',
  },
  '3xs': {
    value: '2',
    primitive: 'spacing-2',
  },
} as const;

export const shadow = {
  s1: {
    value: '0px 0px 10px rgba(0,0,0,0.1)',
    primitive: 'shadow-100',
  },
  s2: {
    value: '0px 6px 12px rgba(0,0,0,0.1), 0px 0px 6px rgba(0,0,0,0.1)',
    primitive: 'shadow-200',
  },
  s3: {
    value: '0px 12px 26px rgba(0,0,0,0.1), 0px 0px 6px rgba(0,0,0,0.1)',
    primitive: 'shadow-300',
  },
  s4: {
    value: '0px 12px 40px rgba(0,0,0,0.1), 0px 0px 6px rgba(0,0,0,0.1)',
    primitive: 'shadow-400',
  },
} as const;

export const opacity = {
  disabled: {
    value: '40',
    primitive: 'opacity-40',
  },
} as const;
