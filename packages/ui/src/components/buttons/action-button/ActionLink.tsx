import {
  forwardRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardRefRenderFunction,
  type ReactElement,
} from 'react';
import { LinkBase, type LinkBaseProps } from '../base/LinkBase';
import {
  ActionButtonContent,
  getActionButtonClassName,
  type ActionButtonStyleProps,
} from './ActionButtonContent';

export type ActionLinkProps<T extends ElementType = 'a'> =
  ActionButtonStyleProps & Omit<LinkBaseProps<T>, keyof ActionButtonStyleProps>;

type ActionLinkComponent = {
  <T extends ElementType = 'a'>(
    props: ActionLinkProps<T> & {
      ref?: ComponentPropsWithRef<T>['ref'];
    },
  ): ReactElement | null;
  displayName?: string;
};

const ActionLinkRender = <T extends ElementType = 'a'>(
  {
    className,
    children,
    variant = 'solid',
    tone = 'brand',
    size = 'lg',
    icon,
    iconPosition = 'left',
    ...props
  }: ActionLinkProps<T>,
  ref: ComponentPropsWithRef<T>['ref'],
) => (
  <LinkBase
    ref={ref}
    {...(props as LinkBaseProps<T>)}
    className={getActionButtonClassName({
      className,
      variant,
      tone,
      size,
    })}>
    <ActionButtonContent icon={icon} iconPosition={iconPosition}>
      {children}
    </ActionButtonContent>
  </LinkBase>
);

/**
 * 페이지 이동이 필요할 때 사용하는 링크 컴포넌트입니다.
 * Next Link, React Router Link 또는 native a에 공통 액션 링크 스타일을 적용합니다.
 */
export const ActionLink = forwardRef(
  ActionLinkRender as unknown as ForwardRefRenderFunction<
    HTMLElement,
    ActionButtonStyleProps
  >,
) as unknown as ActionLinkComponent;

ActionLink.displayName = 'ActionLink';
