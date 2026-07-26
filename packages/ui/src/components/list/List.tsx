import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { SpacingProps } from '../../types';
import { getSpacingPropsClassNames } from '../../utils';

export type ListAs = 'ul' | 'ol';

type ListBaseProps = SpacingProps & {
  className?: string;
  children: ReactNode;
};

export type UnorderedListProps = ListBaseProps &
  ComponentPropsWithoutRef<'ul'> & {
    as?: 'ul';
  };

export type OrderedListProps = ListBaseProps &
  ComponentPropsWithoutRef<'ol'> & {
    as: 'ol';
  };

export type ListProps = UnorderedListProps | OrderedListProps;

export type ListItemProps = SpacingProps &
  ComponentPropsWithoutRef<'li'> & {
    className?: string;
    children: ReactNode;
  };

/**
 * - `ul`/`ol`을 추상화한 List 컴포넌트입니다.
 * - `as="ol"`로 순서 있는 목록을 렌더링할 수 있습니다.
 * - 그 외 스타일(list-style 등)은 `className`(SCSS)으로 처리해야 합니다.
 */
export const List = ({
  as: Component = 'ul',
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
}: ListProps) => {
  const listClassName = clsx(
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
    <Component className={listClassName} {...rest}>
      {children}
    </Component>
  );
};

/**
 * - `li`를 추상화한 ListItem 컴포넌트입니다.
 * - 반드시 `List` 컴포넌트 안에서 사용해야 합니다.
 */
export const ListItem = ({
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
}: ListItemProps) => {
  const listItemClassName = clsx(
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
    <li className={listItemClassName} {...rest}>
      {children}
    </li>
  );
};
