export const RADIUS_TOKENS = ['xs', 's', 'm', 'l', 'full'] as const;

export type Radius = (typeof RADIUS_TOKENS)[number];

export interface RadiusProps {
  radius?: Radius;
}
