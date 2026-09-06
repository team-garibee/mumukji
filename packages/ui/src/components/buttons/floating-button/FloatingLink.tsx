import {
  forwardRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardRefRenderFunction,
  type ReactElement,
} from 'react';
import { LinkBase, type LinkBaseProps } from '../base/LinkBase';
import {
  FloatingButtonContent,
  getFloatingButtonClassName,
  type FloatingButtonStyleProps,
} from './FloatingButtonContent';

export type FloatingLinkProps<T extends ElementType = 'a'> =
  FloatingButtonStyleProps &
    Omit<LinkBaseProps<T>, keyof FloatingButtonStyleProps>;

type FloatingLinkComponent = {
  <T extends ElementType = 'a'>(
    props: FloatingLinkProps<T> & {
      ref?: ComponentPropsWithRef<T>['ref'];
    },
  ): ReactElement | null;
  displayName?: string;
};

const FloatingLinkRender = <T extends ElementType = 'a'>(
  {
    className,
    children,
    variant = 'solid',
    size = 'lg',
    icon,
    iconPosition = 'left',
    onClick,
    ...props
  }: FloatingLinkProps<T>,
  ref: ComponentPropsWithRef<T>['ref'],
) => (
  <LinkBase
    ref={ref}
    onClick={onClick}
    className={getFloatingButtonClassName({
      className,
      variant,
      size,
    })}
    {...(props as LinkBaseProps<T>)}>
    <FloatingButtonContent icon={icon} iconPosition={iconPosition}>
      {children}
    </FloatingButtonContent>
  </LinkBase>
);

/**
 * 화면 위에 떠 있는 캡슐(pill) 형태의 링크입니다.
 * FloatingButton과 동일한 스타일 API를 제공하며, 페이지 이동이 필요할 때 사용합니다.
 */
export const FloatingLink = forwardRef(
  FloatingLinkRender as unknown as ForwardRefRenderFunction<
    HTMLElement,
    FloatingButtonStyleProps
  >,
) as unknown as FloatingLinkComponent;

FloatingLink.displayName = 'FloatingLink';
