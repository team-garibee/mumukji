import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import type { SpacingProps } from '@/types';
import { getSpacingPropsClassNames } from '@/utils';

export type SectionAs = 'section' | 'article';

export type SectionProps = SpacingProps &
  ComponentPropsWithoutRef<SectionAs> & {
    as?: SectionAs;
    className?: string;
    children: ReactNode;
  };

/**
 * - 페이지나 화면 안에서 의미 있는 콘텐츠 구획을 만드는 레이아웃 컴포넌트입니다.
 * - 기본적으로 `<section>`을 렌더링하며, 독립적으로 배포되거나 재사용되는 콘텐츠 구획은
 * `as="article"`로 렌더링할 수 있습니다.
 * - 접근성을 위해 각 Section은 시각적으로 확인 가능한 제목을 포함하거나,
 * 제목을 숨겨야 하는 경우 `aria-label` 또는 `aria-labelledby`로 접근 가능한 이름을
 * 제공해야 합니다.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = 'section',
      className,
      children,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      ...rest
    },
    ref,
  ) => {
    const sectionClassName = clsx(
      getSpacingPropsClassNames({
        p,
        px,
        py,
        pt,
        pr,
        pb,
        pl,
        m,
        mx,
        my,
        mt,
        mr,
        mb,
        ml,
      }),
      className,
    );

    return (
      <Component ref={ref} className={sectionClassName} {...rest}>
        {children}
      </Component>
    );
  },
);

Section.displayName = 'Section';
